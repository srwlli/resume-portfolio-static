---
title: Palette + Theme Vocabulary
status: living
updated: 2026-07-22
kind: ui-design
kind_version: 1.0.0
template_version: 1.0.0
project: resume-portfolio-static
---
<!-- Authored by /standards-establish from SKILLS/STANDARDS/kinds/ui-design/template/PALETTE-THEME-VOCABULARY.md.
     This is the PROJECT's standard for the "ui-design" kind. Edit to fit the project;
     re-run /standards-update when the ecosystem template evolves. -->


# Palette + Theme Vocabulary

This doc explains how `resume-portfolio-static` composes the design-token buckets into
switchable axes. Read this before adding a palette, adding a theme, or wondering
why the root element carries multiple class names.

> Fill the inventories below with THIS project's real palettes and themes.

## Why two axes?

The token buckets cluster into two visually-distinct concerns:

1. **Color identity** — what brand/mood the surface projects.
2. **Envelope** — how content is shaped: radius softness, font character,
   density, motion.

**Composition example:**

```html
<{root} class="{palette-name} {theme-name} {mode}">
```

## Axis 1: Palette (color identity)

`{palette-{name}}` swaps the **colors** bucket only. Palettes shipping today:

| Palette | Intent | Primary accent |
|---|---|---|
| `{palette-default}` (default) | {FILL} | {FILL} |
| `{palette-...}` | {FILL} | {FILL} |
| _{add rows}_ | | |

Each palette swaps only color tokens ({FILL: list, e.g. `--background`,
`--foreground`, `--card`, `--primary`, …}). It does NOT touch typography, radius,
spacing, or any other bucket.

## Axis 2: Theme (envelope)

`{theme-{name}}` swaps the **styles / typography / (partial) effects / layout**
buckets. Themes shipping today:

| Theme | Intent | Radius | Font |
|---|---|---|---|
| `{theme-default}` (default) | {FILL} | {FILL} | {FILL} |
| `{theme-...}` | {FILL} | {FILL} | {FILL} |
| _{add rows}_ | | | |

## How the buckets map onto the axes

| Bucket | Owned by | Defined in |
|---|---|---|
| colors | **palette** (axis 1) | {FILL} |
| styles | **theme** (axis 2) | {FILL} |
| typography | **theme** (axis 2) | {FILL} |
| effects | **theme** (axis 2, mostly) | {FILL} |
| layout | **theme** (axis 2) | {FILL} |
| interactive | **theme** (axis 2) | {FILL} |

## Mode (light/dark)

Independent of palette + theme. {FILL: mechanism, e.g. a `dark` class + a
custom-variant rule; each palette defines both light + dark variants; theme axes
are mode-agnostic.}

## Adding a palette

1. Add the color-token block ({FILL: where — e.g. a `.palette-mynew { … }` class}).
2. {FILL: register the name in the provider's type union / cleanup list}.
3. (Optional) Document intent + accent in the Axis 1 table above.

## Adding a theme

1. Add the envelope-token block ({FILL}).
2. {FILL: register the name}.
3. (Optional) Document intent + radius + font in the Axis 2 table above.

## Semantic status colors (success / warning / destructive)

{FILL: this project's positive/negative/caution axis, distinct from the brand
accent. Components consume `bg-success` / `bg-warning` / `bg-destructive`
(and their `-foreground` pairs) — NEVER raw `bg-green-500` / `bg-amber-500`
(a hardcoded-color violation).}

## Anti-patterns

- [WRONG] Don't put color tokens inside a theme block. Themes are envelope-only.
- [WRONG] Don't put radius/font overrides inside a palette block. Palettes are color-only.
- [WRONG] Don't add a class to the root that isn't a known palette/theme/mode class.
- [WRONG] Don't hardcode hex colors in component code. See TOKEN-USAGE-RULES.md.

