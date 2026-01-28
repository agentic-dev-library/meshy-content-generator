# meshy-content-generator

Declarative Meshy content generation pipelines with a CLI, API, and preview server.

## Why this exists

- **Declarative**: pipelines and tasks are pure JSON; no hard-coded orchestration.
- **Meshy-first**: optimized for Meshy endpoints (text-to-image, text-to-3d, rigging, animation).
- **Composable**: run pipelines from CLI, API, or preview server.

## Install

```bash
pnpm add meshy-content-generator
```

## Quick start

```bash
# list built-in pipelines and tasks
content-gen list --pipelines ./pipelines/definitions --tasks ./tasks/definitions

# validate an asset manifest
content-gen validate ./assets/characters/hero --pipelines ./pipelines/definitions --tasks ./tasks/definitions

# run a pipeline
content-gen run character ./assets/characters/hero \
  --pipelines ./pipelines/definitions \
  --tasks ./tasks/definitions
```

### Environment

```bash
MESHY_API_KEY=your_api_key
POLLY_MODE=replay
```

## API

```ts
import {
  PipelineRunner,
  loadJsonDefinitions,
} from "meshy-content-generator";

const definitions = await loadJsonDefinitions({
  pipelinesDir: "./pipelines/definitions",
  tasksDir: "./tasks/definitions",
});

const runner = new PipelineRunner({
  definitions,
  apiKey: process.env.MESHY_API_KEY!,
});

await runner.run({
  pipelineName: "character",
  assetDir: "./assets/characters/hero",
});
```

## Concepts

### Pipeline definitions

`pipelines/definitions/*.pipeline.json` describe **orchestration**. Each step references a task and can override inputs.

### Task definitions

`tasks/definitions/*.json` describe **provider calls**. Inputs specify how to resolve values from manifests, previous steps, literals, environment variables, or lookup tables.

### Manifest

Each asset directory contains a `manifest.json` that supplies task inputs and stores task state.

## API + Preview

```bash
pnpm dev
```

- API reference: `http://localhost:5177/api`
- OpenAPI spec: `http://localhost:5177/openapi.json`
- Preview: `http://localhost:5177/preview?assetDir=./assets/characters/hero&file=model.glb`

## Testing

```bash
pnpm test:unit
pnpm test:e2e
pnpm test:all
```

To record Meshy calls once and replay in CI:

```bash
POLLY_MODE=record pnpm test:unit
```

## Scripts

```bash
pnpm check
pnpm test
pnpm build
```

## Docs

- `src/content/docs` for the Astro documentation site content

## License

MIT
