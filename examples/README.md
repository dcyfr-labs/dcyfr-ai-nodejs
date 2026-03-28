# @dcyfr/ai-nodejs Examples

This directory contains runnable examples for the `@dcyfr/ai-nodejs` Node.js/TypeScript starter template.

## Example Index

| File               | Demonstrates                                              |
| ------------------ | --------------------------------------------------------- |
| `basic-usage.ts`   | TelemetryEngine and ValidationFramework core usage        |
| `plugin-system.ts` | Plugin lifecycle, registration, and validation patterns   |
| `telemetry.ts`     | Advanced telemetry initialization and structured logging  |

## Prerequisites

- Node.js >= 20
- Install dependencies: `npm install`

## Run Examples

From the package root:

```bash
npx tsx examples/basic-usage.ts
npx tsx examples/plugin-system.ts
npx tsx examples/telemetry.ts
```

## Compile Check (CI)

All examples are validated by the TypeScript compiler:

```bash
npm run examples:compile
```

This compiles all example files with `moduleResolution: nodenext` (matching the package's ESM runtime). It is enforced in the `validate-examples` CI workflow on every PR.

## Expected Output Markers

Each example uses `// @expected-output: <text>` comments before key `console.log` calls. These serve as smoke-test anchors verifying correct execution in CI.

## Authoring Notes

- Use the standard JSDoc header: `@example`, `@description`, `Prerequisites:`, `Usage:`, `@license`, `@copyright`.
- Add `// @expected-output: <text>` before any `console.log` that signals successful completion.
- Run `npm run examples:compile` before committing example changes.
