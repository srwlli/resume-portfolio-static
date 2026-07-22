---
title: UI Design Standards — Authority Root
status: living
updated: 2026-07-22
kind: ui-design
kind_version: 1.0.0
template_version: 1.0.0
project: resume-portfolio-static
# usage_doc_dir: docs/COMPONENTS   # (optional, opt-in) project-relative dir of this
#                                  # project's CONSUMER usage-doc axis. Declaring it
#                                  # turns ON module.cross-axis-doc-consistency, which
#                                  # warns when a component is documented on one axis
#                                  # (usage docs here vs design specs in
#                                  # standards/design/COMPONENTS/) but not the other.
#                                  # Omit if this project has no separate usage-doc axis.
purpose: Authority root for the static resume portfolio visual system
audience: Contributors authoring semantic HTML, CSS, or progressive enhancement
---
<!-- Authored by /standards-establish from SKILLS/STANDARDS/kinds/ui-design/template/README.md.
     This is the PROJECT's standard for the "ui-design" kind. Edit to fit the project;
     re-run /standards-update when the ecosystem template evolves. -->


<!--
  TRACKING / LIVING-DOC ENVELOPE — do not delete.
  This doc was rendered from the ecosystem `ui-design` kind template
  (SKILLS/STANDARDS/kinds/ui-design/, version = kind_version above).
  It is now THIS project's living design-standards authority — edit it to fit.
  • status: living | historical | draft | superseded (checker-governed)
  • template_version records which ecosystem template this copy came from;
    when the ecosystem kind bumps, `/standards-update` re-syncs and this field moves.
  • Maintain via: /standards-validate (enforce) · /standards-update (re-sync) ·
    the recurring audit in AUDITS/ (drift heartbeat).
-->

# UI Design Standards

This directory is the **single declared authority root** for design rules in
`resume-portfolio-static`. Every page, component, token, and style decision points here.

## Why this exists

Codifies the visual-identity rules so humans and agents ship consistent UI
without re-deriving conventions per task. The core promise: **visual identity
comes only from the design-token system — never a hardcoded value.**

> **Source pedigree:** rendered from the ecosystem `ui-design` standard-KIND
> (`SKILLS/STANDARDS/kinds/ui-design/`) and customized for a framework-free static
> site. This project uses semantic HTML, one shared CSS token system, and small
> vanilla JavaScript enhancements.

## Core docs

| Doc | Purpose |
|---|---|
| [CORE-PRINCIPLES.md](./CORE-PRINCIPLES.md) | The immutable rules. **Read first.** |
| [TOKEN-CONTRACT.md](./TOKEN-CONTRACT.md) | The token-bucket architecture — the mechanical contract every component obeys. |
| [TOKEN-USAGE-RULES.md](./TOKEN-USAGE-RULES.md) | "No hardcoded values" with wrong/correct examples per category. |
| [PALETTE-THEME-VOCABULARY.md](./PALETTE-THEME-VOCABULARY.md) | How this project composes tokens into palette + theme axes; the palette/theme inventory. |
| [AGENT-CHECKLIST.md](./AGENT-CHECKLIST.md) | Pre-flight checklist. No component ships without this. |
| [COMPONENTS/TEMPLATE.md](./COMPONENTS/TEMPLATE.md) | Per-component spec required BEFORE coding any component. Copy + fill per component. |
| [AUDITS/audit-procedure.md](./AUDITS/audit-procedure.md) | Recurring drift-detection procedure. Run on the operator's chosen cadence. |

## Enforcement model

- These docs are **process-enforced + checker-enforced**.
- The enforceable twin is the ecosystem checker
  (`SKILLS/STANDARDS/kinds/ui-design/check.mjs`), run via `/standards-validate`.
- Enforcement = read-before-coding (AGENT-CHECKLIST) + the recurring audit +
  the checker in CI + the per-component spec gate.
- The Phase 4 testing estate will lint for forbidden hardcoded style values.

## Build gates

| Gate | Purpose | When to run |
|---|---|---|
| `node SKILLS/STANDARDS/kinds/ui-design/check.mjs --project-root={ABS_PATH}` | Portable checker: no hardcoded colors (FAIL), plus standard/spec/utility drift (WARN). | Before committing; in CI as a required check. |
| `/standards-validate --project-root={ABS_PATH}` | Runs the checker through the standards lifecycle. | On demand + CI. |
| Static checks | `npm test` | Phase 4 onward |

The GitHub Pages workflow will run static checks after the execution standard is
established; no framework build step is permitted.

## The two axes (this project)

- **Palette** — `:root` semantic color custom properties in `assets/css/site.css`.
- **Theme / envelope** — root spacing, type, radius, shadow, and motion tokens.
- **Mode** — one restrained light presentation; no dark-mode promise in v1.

See [PALETTE-THEME-VOCABULARY.md](./PALETTE-THEME-VOCABULARY.md) for the full mapping.

## Reading order for new contributors

1. CORE-PRINCIPLES.md — the immutable rules
2. README.md (this file) — the map
3. AGENT-CHECKLIST.md — what to do before touching a component
4. TOKEN-CONTRACT.md — the token-bucket architecture
5. TOKEN-USAGE-RULES.md — the wrong/correct examples

## Change history

| Date | Author | Change |
|---|---|---|
| 2026-07-22 | ASSISTANT | Established and customized for the static portfolio |

