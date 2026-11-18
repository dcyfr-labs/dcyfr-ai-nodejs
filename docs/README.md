<!-- TLP:CLEAR -->
# Documentation Index

Documentation for the DCYFR AI Node.js and TypeScript starter template. For an overview of the template itself, see the [root README](../README.md). For the CLI extraction from v1 to v2, see [MIGRATION.md](../MIGRATION.md).

## Getting started

- [GETTING_STARTED.md](GETTING_STARTED.md): step-by-step setup from creating a project from the template through installing dependencies, configuring it, running the first example, and building for production.

## Possibly outdated

These three documents were written early in the template's life and no longer match the repo. They are kept for history.

- [.project-summary.md](.project-summary.md): a hidden file recording what was created when the template was first generated, with the file tree, test results, npm scripts, and repository info. It lists a single `src/index.ts` entry point and says the git repository has 1 commit, but `src/` now also contains `server.ts` and the history has 128 commits.
- [INTEGRATION_NOTES.md](INTEGRATION_NOTES.md): explains how the template connects to the `@dcyfr/ai` framework and how to switch from a local package to the published one. It describes a local `@dcyfr/ai` package used through workspace file references, but `package.json` now depends on the registry version (`@dcyfr/ai` `^3.0.3`).
- [PROOF_OF_CONCEPT.md](PROOF_OF_CONCEPT.md): walks through the web server and CLI demonstration, with sample output, an architecture diagram, and test results. It documents a `commander` based CLI with `serve`, `status`, `validate`, `telemetry`, and `init` commands, but `src/` has no `cli` directory, `commander` is not a dependency, and `MIGRATION.md` records that the CLI moved to `@dcyfr/ai-cli`.
