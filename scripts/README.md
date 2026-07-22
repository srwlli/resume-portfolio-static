---
title: Resume Portfolio Scripts
status: living
updated: 2026-07-22
---

# Scripts

This directory contains development-only validation and publication-support scripts.
Scripts must not become a production runtime dependency for the static site.

## Script index

| Script | Purpose | Command |
|---|---|---|
| `preview.mjs` | Serve the repository locally for development inspection. | `npm run preview` |
| `check-commit-location.mjs` | Enforce the repository commit-location rule. | Git hook invocation |
| `verify-push-reached-origin.mjs` | Verify that `origin/main` reaches the local commit. | Git workflow invocation |

## Usage

Run scripts through the declared npm command or the Git hook. The preview helper is
local-only and is never part of the GitHub Pages production artifact.
