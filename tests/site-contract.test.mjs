import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) => readFileSync(join(repositoryRoot, relativePath), "utf8");

const app = read("src/App.tsx");
const landingPage = read("src/pages/Index.tsx");
const readme = read("README.md");

test("application exposes the primary public route map", () => {
  for (const route of ["/", "/services", "/our-work", "/about", "/contact"]) {
    assert.match(app, new RegExp(`path="${route}"`));
  }

  assert.match(app, /path="\*"/);
  assert.match(app, /ProjectInquiryModal/);
});

test("landing page composes the primary visitor experience", () => {
  for (const component of [
    "Navbar",
    "Hero",
    "StatsStrip",
    "Services",
    "WhyChooseUs",
    "SimpleCTA",
    "Footer",
  ]) {
    assert.match(landingPage, new RegExp(`<${component}`));
  }
});

test("README provides the verified quickstart and support route", () => {
  for (const marker of [
    "## Purpose and use cases",
    "## Verified install and use quickstart",
    "npm ci",
    "npm run build",
    "npm run lint",
    "npm run typecheck",
    "npm run test",
    "## Support and contact",
  ]) {
    assert.ok(readme.includes(marker), `missing README marker: ${marker}`);
  }
});

test("support and security documentation paths are present", () => {
  for (const policy of [
    "CODE_OF_CONDUCT.md",
    "CONTRIBUTING.md",
    "SUPPORT.md",
    "SECURITY.md",
  ]) {
    assert.ok(existsSync(join(repositoryRoot, policy)), `missing policy: ${policy}`);
  }
});
