# Contributing

Thanks for your interest in contributing!

## Development setup

```bash
pnpm install
pnpm check
pnpm test
```

## Project structure

- `pipelines/` and `tasks/` hold JSON definitions.
- `src/` contains the CLI, API server, and pipeline engine.
- `src/content/docs` powers the docs site (Astro + Starlight).

## Code style

- Format/lint: `pnpm check`
- Typecheck: `pnpm typecheck`

## Tests

- Unit: `pnpm test:unit`
- E2E: `pnpm test:e2e`
- All: `pnpm test:all`

## VCR recordings

To refresh Meshy recordings:

```bash
POLLY_MODE=record pnpm test:unit
```

Commit files under `test/__recordings__` when updating recordings.

## Releases

We use **release-please** with SemVer tags (e.g. `v1.2.3`).
Versioning is automated from Conventional Commit messages.
