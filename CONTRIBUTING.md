# Contributing

Scarlet Fiber Future Web is a public-facing TechTide Ohio website. Contributions should preserve accessibility, responsive behavior, visual consistency, and the safety of public content.

## Before opening a pull request

Use Node.js 20 or newer, then run the full quality contract from the repository root:

```bash
npm ci
npm run build
npm run lint
npm run typecheck
npm run test
```

Describe the page or user journey affected, the expected outcome, and how the change was tested. Include screenshots for visual changes when practical. Keep changes focused and avoid unrelated formatting or dependency updates.

Do not commit API keys, analytics credentials, private customer details, unpublished client work, or unapproved brand assets. Security-sensitive concerns belong in the route described by [SECURITY.md](./SECURITY.md).
