---
kind: execution
subtype: generation
title: Static Portfolio Generation Standard
status: living
updated: 2026-07-22
authority: docs/standards/documentation.md
---

# Generation — Static Portfolio Artifacts

The pinned generator surfaces are local validation and Pages artifact assembly. Their canonical output format is a repository-relative static file set plus deterministic validation results. Reproducible inputs are tracked source files, declared commands, and the fixed repository base path; random values, wall-clock timestamps, scan order, and absolute paths are excluded. If a required page, asset, test, or provenance decision is absent, the generator refuses to emit or publish and reports the missing input.

Same inputs produce the same artifact set and validation result across runs. See: [documentation standard](../documentation.md) and [testing standard](../testing/README.md).
