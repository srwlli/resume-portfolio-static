---
title: Token Contract
status: living
updated: 2026-07-22
kind: ui-design
kind_version: 1.0.0
template_version: 1.0.0
project: resume-portfolio-static
---
<!-- Authored by /standards-establish from SKILLS/STANDARDS/kinds/ui-design/template/TOKEN-CONTRACT.md.
     This is the PROJECT's standard for the "ui-design" kind. Edit to fit the project;
     re-run /standards-update when the ecosystem template evolves. -->


# Token Contract

> Canonical mechanics for UI/UX work in `resume-portfolio-static`. Point agents and
> contributors here before they touch a component or write new styles.

**Scope:** {FILL: e.g. the app at `app/` and components under `components/`}.

---

## 1. Core Principle: Tokens Own Visual Identity

**No hardcoded colors, radii, shadows, or borders in components.** Visual
identity is injected at runtime as CSS variables. Components consume tokens via
semantic classes ({FILL: e.g. `bg-card`, `text-muted-foreground`}) or the CSS
variable cascade.

If you find yourself typing `rounded-md`, `shadow-sm`, `border`, `#hex`, or
`rgb(...)` in a component — stop and use the token. These are reserved for the
token registry.

**Why:** themes and styles must compose without per-component rewrites.
Hardcoded values break that contract on day one of the next palette swap.

---

## 2. Token System Architecture

{FILL: this project's token buckets. Example structure below — adjust to fit.}

### Layer 1 — Base tokens (registry)

- **Source:** {FILL: e.g. `lib/themes/token-registry.ts`}
- **Buckets:** {FILL: e.g. colors, styles, typography, effects, layout, interactive}
- **Applier:** {FILL: how tokens are written to the document, e.g.
  `applyTokenSet(tokens)` writes CSS variables to `document.documentElement`}

### CSS variable naming

| Bucket | Prefix | Example |
|---|---|---|
| {colors} | `{--}` (bare) | `{--background}`, `{--primary}` |
| {styles} | `{--style-}` | `{--style-radius}` |
| {typography} | `{--typography-}` | `{--typography-font-sans}` |
| {effects} | `{--effects-}` | `{--effects-blur-lg}` |
| {layout} | `{--layout-}` | `{--layout-gutter}` |
| {interactive} | `{--interactive-}` | `{--interactive-hover-lift}` |

### Palette vs Theme composition

{FILL: how this project composes buckets into switchable axes. See
PALETTE-THEME-VOCABULARY.md for the full mapping.}

---

## 3. Component Rules

### 3.1 Binding on styled roots
{FILL: this project's binding mechanism — class composition or a `data-style`
attribute. Cards/styled elements bind to style tokens only when the mechanism is
present.}

### 3.2 Strip redundant utilities from styled children

When a styled element is inside the binding context, **remove** these — the
token system already owns them:

| Utility | Why remove |
|---|---|
| `rounded-*` | `{--style-radius}` already applied |
| `shadow-*` | `{--style-shadow}` already applied |
| `border` | `{--style-card-border}` already applied |
| `bg-white` / `bg-zinc-*` | `{--card}` binds the surface |

**Keep** layout utilities: `flex`, `gap-*`, `h-*`, `w-*`, fixed widths.

### 3.3 Semantic color classes only
Use classes that map to tokens ({FILL: this project's map}). Avoid raw
`bg-gray-*`, `text-slate-*`, `border-zinc-*`, `text-green-600`. If a specific
semantic color is genuinely needed (e.g. an online/offline dot), document the
exception inline with an explicit allow-marker.

### 3.4 Composition over prop explosion
Prefer slot-style composition over a bag of configuration props.

---

## 4. Theme / Style / Mode Behavior

- **Mode (light/dark):** {FILL: mechanism, e.g. a `dark` class + `light-dark()`}.
- **Font:** {FILL: allowlist location; never hardcode font-family in components}.
- **Persistence:** {FILL: e.g. localStorage keys}.
- **FOUC prevention:** {FILL: e.g. a blocking script that applies tokens before
  first paint — do not add async theme loading}.

---

## 5. Layout Primitives

{FILL: container heights, spacing scale, max widths, responsive breakpoints,
z-index stacking order. Do not invent ad-hoc pixel values.}

---

## 6. Accessibility Baseline

- All interactive elements reachable via keyboard; tab order follows visual order.
- Icon-only buttons have `title` or `aria-label`.
- Contrast: pick the highest-contrast palette as the reference floor.
- Status indicators carry text or `title` alongside color — never color alone.

---

## 7. Testing Matrix

For any new component: render in the current palette+theme; cycle every palette
(colors adapt); cycle every theme (radii/shadows/borders adapt); spot-check
random combinations; flip light/dark in each (contrast holds).

---

## 8. Common Gotchas

| Symptom | Likely cause | Fix |
|---|---|---|
| Elements render with default browser radius | Missing binding on ancestor | {FILL} |
| Colors don't change on palette switch | Hardcoded color (`bg-zinc-900`) | Replace with a semantic token |
| Theme flashes on first load | Async/deferred token application | Verify the blocking apply script is intact |

---

**Summary for a new agent in one line:** {FILL: e.g. bind on styled roots,
consume tokens via semantic classes, never hardcode colors or radii.}

