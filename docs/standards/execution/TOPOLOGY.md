---
kind: execution
subtype: topology
title: Static Portfolio Artifact Topology
status: living
updated: 2026-07-22
authority: docs/standards/structure/README.md
---

# Topology — Canonical Static Artifacts

Named artifact classes are seven directory-index pages, shared styles under `assets/css/`, progressive-enhancement scripts under `assets/js/`, tests under `tests/`, and the Pages workflow under `.github/workflows/`. The canonical resolver is repository-relative: page and asset paths are computed from the fixed repository base path and stable route names, never from an absolute machine path. The structure standard is the authority for the project tree; distinct artifacts cannot collide.
