# @dcyfr/ai-nodejs-starter

This repository has no git tags or GitHub releases yet, and no changeset has been versioned. The `package.json` version is `1.0.0` (unchanged since the first commit), and the package is marked `"private": true`. This file follows the Changesets layout, so the next `changeset version` run adds its section above `Unreleased`. The entries below summarise notable merged work from the git history, grouped by area.

## Unreleased

### Template and runtime

- Initial DCYFR AI Node.js and TypeScript starter template, with an Express web server, a landing page, and integration with the `@dcyfr/ai` framework (January 2026).
- Marked the starter as a private template (`8bfd711`).
- Moved the `@dcyfr/ai` dependency to `^3.0.3` for a security fix (#24).
- Dropped `TelemetryEngine` members from the server that never existed (#63).
- Handled floating promises in the entry points and linted all of `src` (#55).

### CLI

- Extracted the CLI code into the standalone `@dcyfr/ai-cli` package; the starter delegates through `npm run cli`. `MIGRATION.md` describes the move from v1 to v2 (`8d25576`, `0e5a3fd`).

### Release tooling

- Added Changesets based versioning and a release workflow (`561e079`).
- Release workflow now mints tokens through the `dcyfr-labs-release` GitHub App (#28) and publishes through npm OIDC Trusted Publishing (#30).
- Migrated to `changesets/action` v2 and Changesets CLI v3 (#44), and pinned npm to 11.x so the release no longer aborts on an engine mismatch (#39).

### CI and security

- Added a CI workflow for lint, type check, test, and build (`a17ade9`).
- Added SonarCloud analysis (`a9b12f8`), CodeQL analysis for JS and TS (#18), and a Semgrep workflow (#19).
- Added Dependabot configuration for npm and GitHub Actions (`1799d0e`) and a Dependabot auto-merge workflow with a weekly sweep (#47, #48).

### Documentation

- Added `AGENTS.md`, `MIGRATION.md`, a getting started guide, and corrected README links and organization URLs (#35, #60, #62, #64).
- Clarified licensing: MIT covers commercial use and the retired paid tiers were removed from the docs (#58, #65).
- Added `docs/README.md`, an index of the documentation.
