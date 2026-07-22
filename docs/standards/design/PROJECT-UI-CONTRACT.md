---
title: Resume Portfolio UI Contract
status: living
updated: 2026-07-22
kind: ui-design
kind_version: 1.4.0
template_version: 1.0.0
project: resume-portfolio-static
---

# Resume Portfolio UI Contract

This project is a framework-free static site. Its visual system is authored in
`assets/css/site.css` with semantic custom properties and consumed by semantic
HTML classes. No React, Tailwind, component runtime, or client-side router is
allowed.

## Token contract

Use these buckets: `--color-*`, `--style-*`, `--type-*`, `--effect-*`,
`--layout-*`, and `--interactive-*`. Colors, borders, radii, shadows,
typography, motion, and focus treatments must reference a token. Layout values
may use the declared responsive scale. Never add raw hex, rgb/hsl, named color,
radius, or shadow literals to page markup or inline styles.

## Shared component contract

The ten patterns in `COMPONENTS/AUDIT.md` are semantic HTML patterns, not a
framework component library. Each must preserve keyboard access, visible focus,
heading hierarchy, responsive behavior, reduced-motion support, and print-safe
output where relevant. The navigation must work from the repository base path.

## Responsive and accessibility contract

Design and test at 320px, 768px, 1024px, and 1440px. Use landmarks, skip links,
descriptive link text, text alternatives for non-text content, and non-color
status cues. `prefers-reduced-motion: reduce` disables decorative transitions.
The resume remains readable when printed.

## Change gate

Before Phase 7 implementation, read `CORE-PRINCIPLES.md`,
`TOKEN-CONTRACT.md`, `TOKEN-USAGE-RULES.md`, and `AGENT-CHECKLIST.md`. Update
the inventory and add a named component spec before introducing a new pattern.

