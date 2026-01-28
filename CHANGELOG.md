# Changelog

All notable changes to this project are documented here.
This file is maintained by release-please and follows Semantic Versioning.

## [0.1.2](https://github.com/agentic-dev-library/meshy-content-generator/compare/v0.1.1...v0.1.2) (2026-01-28)


### Bug Fixes

* add --repo flag to gh pr merge for non-checkout context ([90d6129](https://github.com/agentic-dev-library/meshy-content-generator/commit/90d61299de7cc976aff840f1e36a322e84a44b52))
* format code and remove unused import ([275104d](https://github.com/agentic-dev-library/meshy-content-generator/commit/275104d51c7456b8ec7019ca5f5852b35e4e9140))
* remove pnpm version conflict in workflows ([5ee53f9](https://github.com/agentic-dev-library/meshy-content-generator/commit/5ee53f9cf29720943b0fa27dc4ae9d692aea4f31))

## [0.1.1](https://github.com/agentic-dev-library/meshy-content-generator/compare/v0.1.0...v0.1.1) (2026-01-28)


### Features

* add configurable skipArtifacts option for pipeline steps ([#4](https://github.com/agentic-dev-library/meshy-content-generator/issues/4)) ([6d51b9e](https://github.com/agentic-dev-library/meshy-content-generator/commit/6d51b9ea509e6847f659fe3738c32c8d6e4642cf))


### Bug Fixes

* skip completed tasks and download missing artifacts ([#2](https://github.com/agentic-dev-library/meshy-content-generator/issues/2)) ([9559913](https://github.com/agentic-dev-library/meshy-content-generator/commit/9559913d3a86c0b97591027fbbb5297917f59651))
* use PAT for release-please to bypass enterprise restrictions ([c4029f7](https://github.com/agentic-dev-library/meshy-content-generator/commit/c4029f7d77d4a83c8867cb4c6b36ac539a3b91c4))

## [0.1.0] - 2026-01-28

Initial OSS release with:

- Declarative pipeline/task engine for Meshy
- CLI + API server + preview
- VCR-backed testing and docs site
