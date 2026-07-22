---
title: Resume Portfolio Static
status: living
updated: 2026-07-22
purpose: Publish an evidence-led static resume and portfolio on GitHub Pages.
audience: Operators, contributors, reviewers, and future maintainers.
scope: Project navigation, local validation, and the deployable static site.
---

# Resume Portfolio Static

A planned clean-room resume and portfolio site using static HTML, CSS, and vanilla
JavaScript for GitHub Pages.

## Repository layout

- `docs/standards/` — project governance and standards.
- `scripts/` — development automation and validation helpers.
- Page directories — deployable directory-index HTML pages, added during the build phase.
- `assets/` — shared CSS, JavaScript, and image assets, added during the build phase.
- `tests/` — development-only test estate, added during the testing phase.

The ASSISTANT workorder records live outside this repository and never overlap the
target code tree.

## Current status

Phases 1–5 governance are established. Site implementation has not begun.

## Quickstart

Prerequisite: Node.js 20 or newer and Git.

```text
npm test
npm run preview
```

`npm test` runs the deterministic governance suite. `npm run preview` starts a
development-only static preview server; production hosting does not require it.

## Documentation map

- `CONTEXT.md` — canonical technical context and constraints.
- `VISION.md` — project goals and non-goals.
- `AGENTS.md` — concise change-safety rules.
- `docs/standards/` — established project standards.
- `docs/content-provenance.md` — source and review policy for resume content.
