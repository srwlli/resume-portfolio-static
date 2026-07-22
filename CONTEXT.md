---
title: Resume Portfolio Static Context
status: living
updated: 2026-07-22
last_validated: 2026-07-22
project_status: active — governance phases in progress; site implementation not started
---

# Context

This repository is a new static implementation inspired by the read-only
`evidence-trail-builder` repository. It is not a conversion or copy of that
application.

Production output is limited to HTML, CSS, JavaScript, and assets. The site uses real
directory `index.html` pages rather than a client-side router. Local preview servers and
test runners, when introduced, are development tools only.

No identity, employment, education, dates, credentials, contact details, or evidence
links may be invented or shipped as placeholders.

## Project Overview

The project will become a seven-page resume and portfolio site for GitHub Pages.
Standards are established one phase at a time before implementation begins.

## Tech Stack

- Runtime: browser-native HTML, CSS, and vanilla JavaScript.
- Development: Node.js 20+ built-in test runner and a local preview helper.
- Production: static files only; no server process or runtime dependency.

## Commands

```text
npm test
npm run preview
```

The test command is the Phase 4 governance smoke suite and will expand during the
build phase. The preview command is development-only.

## Architecture

Each published route is a directory-index `index.html` page. Shared CSS, JavaScript,
and images live under `assets/`; tests live under `tests/`; governance documents live
under `docs/`. Relative references must work under `/resume-portfolio-static/`.

## Critical Rules

- Keep `evidence-trail-builder` read-only and unchanged.
- Establish one standard per workorder phase and stop at each hard stop.
- Do not invent personal content or retain placeholders in publishable pages.
- Do not add a production server, framework, database, authentication, or client router.
- Commit only explicitly scoped phase paths and verify `origin/main` after each phase.
