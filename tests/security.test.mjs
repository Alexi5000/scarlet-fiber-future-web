import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";

const window = new JSDOM("").window;
const source = readFileSync(new URL("../src/utils/security.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
}).outputText;
const exports = {};
new Function("require", "exports", compiled)(() => DOMPurify(window), exports);
const { sanitizeHTML, sanitizeInput } = exports;

const attacks = [
  '<script>alert(1)</script >',
  '<scr<script>ipt>alert(1)</scr</script>ipt>',
  '<iframe srcdoc="<script>alert(1)</script>"></iframe>',
  '<object data="javascript:alert(1)"></object><embed src="data:text/html,evil">',
  '<img src=x onerror="alert(1)">',
  '<a href="javascript:alert(1)">click</a>',
  '<a href="java&#x73;cript:alert(1)">click</a>',
  '<a href="data:text/html,<script>alert(1)</script>">click</a>',
  '<a href="vbscript:msgbox(1)">click</a>',
  '<svg><g onload="alert(1)"></g></svg>',
];

for (const payload of attacks) {
  test(`sanitizes executable markup: ${payload}`, () => {
    const container = window.document.createElement("div");
    container.innerHTML = sanitizeHTML(payload);
    assert.equal(container.querySelector("script,iframe,object,embed,svg"), null);
    for (const element of container.querySelectorAll("*")) {
      for (const attribute of element.attributes) {
        assert.ok(!attribute.name.toLowerCase().startsWith("on"));
        if (["href", "src"].includes(attribute.name)) {
          assert.ok(!/^(?:javascript|vbscript|data):/i.test(attribute.value.trim()));
        }
      }
    }
  });
}

test("preserves safe HTML and links", () => {
  const html = '<p>Hello <strong>team</strong> <a href="https://example.com">visit</a></p>';
  assert.equal(sanitizeHTML(html), html);
});

test("plain form input preserves words, punctuation, and contact details", () => {
  assert.equal(sanitizeInput("  Script & Object installation  "), "Script & Object installation");
  assert.equal(sanitizeInput("alex+project@example.com"), "alex+project@example.com");
  assert.equal(sanitizeInput("O'Reilly"), "O'Reilly");
  assert.equal(sanitizeInput("<hello>"), "hello");
});
