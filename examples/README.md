# Examples

This directory contains runnable examples for `@dcyfr/ai-nodejs` template usage.

## Files

- `basic-usage.ts` — Core framework usage flow.
- `plugin-system.ts` — Plugin lifecycle and registration patterns.
- `telemetry.ts` — Telemetry initialization and logging patterns.

## Prerequisites

- Install dependencies: `npm install`

## Run examples

From package root:

- `npx tsx examples/basic-usage.ts`
- `npx tsx examples/plugin-system.ts`
- `npx tsx examples/telemetry.ts`

## Type-check examples

- `npx tsc --noEmit --module nodenext --moduleResolution nodenext --target es2022 --strict --esModuleInterop true --skipLibCheck true examples/plugin-system.ts examples/telemetry.ts`
