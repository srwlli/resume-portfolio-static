---
title: Core Design System Principles
status: living
updated: 2026-07-22
kind: ui-design
kind_version: 1.0.0
template_version: 1.0.0
project: resume-portfolio-static
---
<!-- Authored by /standards-establish from SKILLS/STANDARDS/kinds/ui-design/template/CORE-PRINCIPLES.md.
     This is the PROJECT's standard for the "ui-design" kind. Edit to fit the project;
     re-run /standards-update when the ecosystem template evolves. -->


# Core Design System Principles

**This document is NORMATIVE.** Every component, pattern, layout, and composition
MUST satisfy these principles. Drift = violation. Violations are blocking.

> Rendered from the `ui-design` kind template. Fill `{PLACEHOLDERS}` with this
> project's real token buckets, class names, and header standard.

---

## 0. The One Rule

**Every visual decision is derived from the design-token system
({FILL: list this project's token buckets, e.g. colors, styles, typography,
effects, layout, interactive}). Nothing else exists visually.**

No hardcoded colors, radii, shadows, borders, fonts, spacing, or behaviors.
Ever. Not in style attributes, not in utility classes, not in comments.

---

## 1. Token System is the Authority

### 1.1 The Buckets (Canonical source: {FILL: e.g. `lib/themes/token-registry.ts`})

| Bucket | Keys | Usage | CSS var prefix |
|---|---|---|---|
| **{colors}** | {semantic named} | color values only | `{--}` |
| **{styles}** | {radius, shadow, border} | radii, shadows, borders | `{--style-}` |
| **{typography}** | {font, line-height, tracking} | type | `{--typography-}` |
| **{effects}** | {blur, opacity, filters} | effects | `{--effects-}` |
| **{layout}** | {spacing, gutters, widths} | layout | `{--layout-}` |
| **{interactive}** | {hover, active, cursor} | interaction | `{--interactive-}` |

> Adjust the bucket list to this project. The RULE is bucket-agnostic: *some*
> token system owns every visual value.

### 1.2 Token Consumption Rules

**RULE 1: Semantic classes bind directly to tokens.**

```tsx
// [CORRECT] CORRECT — semantic classes
<header className="{bg-card border-b border-border}">
  <span className="{text-foreground}">Title</span>
</header>

// [WRONG] WRONG — hardcoded class / literal
<header className="bg-zinc-900 border-b border-gray-300">Title</header>
<header style={{ backgroundColor: "#1a1a1a" }}>Title</header>
```

**RULE 2: When classes are insufficient, use the CSS variable directly.**

```tsx
// [CORRECT] CORRECT — CSS var for an open-bucket token
<div style={{ gap: "var(--layout-gutter)" }}>

// [WRONG] WRONG — hardcoded value
<div style={{ gap: "1rem" }}>
```

**RULE 3: Semantic classes MUST match the token they reference.**
({FILL: this project's class → token map, e.g. `bg-card` → `--card`.})

**RULE 4: No cross-bucket token misuse.** Structural borders use a structural
color token; action/intent colors use action tokens. NEVER use an action color
(`{--primary}`) as a structural border.

---

## 2. Component Token Binding

{FILL: this project's binding mechanism. Two common patterns:}

- **{Class-composition}** — palette/theme classes on a root element cascade CSS
  vars to all descendants (single-app default).
- **{`data-style` cascade}** — styled elements (cards, buttons) auto-bind to
  style tokens only under an ancestor carrying a binding attribute.

Whichever this project uses, document it here and enforce: **styled elements
must not carry redundant hardcoded utilities** (`rounded-*`, `shadow-*`,
`border`, `bg-white`) — the token system already owns them.

```tsx
// [CORRECT] CORRECT — utilities stripped, tokens take over
<Card className="w-64 flex flex-col">…</Card>

// [WRONG] WRONG — hardcoded utilities conflict with tokens
<Card className="w-64 rounded-lg shadow-md border bg-white px-4 py-4">…</Card>
```

---

## 3. Token Application Layer

A single provider ({FILL: e.g. `ThemeProvider` mounted in the app root}) applies
the current palette + theme to the document as CSS variables on every change.
Components consume via semantic classes or CSS vars; they NEVER apply tokens
manually.

**CSS variable precedence (latest wins):**
1. Stub/default layer ({FILL: e.g. `@theme {}` defaults})
2. Palette tokens (color bucket)
3. Theme tokens (envelope buckets)
4. Mode tokens (light/dark)

Components NEVER override this stack. New tokens land in the registry, not in
components.

---

## 4. Component Anatomy (No Prop Soup)

- **Slot composition over props.** Children are flexible slots; logic is minimal.
- **Own layout, accept `className`.** A component owns its layout structure
  (flex/grid/spacing); a consumer passes `className` to customize appearance —
  it does NOT become a prop bag.

```tsx
// [CORRECT] slot composition            // [WRONG] prop explosion
<Header>                          <Header logoSrc=".." showNav navLinks={[..]}
  <Header.Logo src=".." />                showThemeToggle />
  <Header.Actions>…</Header.Actions>
</Header>
```

---

## 5. Header Standard

{FILL: this project's canonical page-header anatomy + invariant properties.}

```tsx
<header role="banner" className="{sticky top-0 z-50 w-full border-b border-border bg-card}">
  <nav aria-label="Main navigation" className="{mx-auto flex h-16 max-w-7xl items-center justify-between px-6}">
    <div>{/* left */}</div><div>{/* center */}</div><div>{/* right */}</div>
  </nav>
</header>
```

Invariants: {FILL: role, sticky, structural border (NOT an action color),
surface token, height, gutter, max-width}.

---

## 6. The Golden Rule: Semantic Over Structural

When in doubt, ask: **"Is this token semantic (meaning-carrying) or structural
(layout)?"** Structural tokens are always safe. Semantic tokens must match
intent. Never use an action token for structure; never use a structural token
for action.

---

## 7. Enforcement: Component Checklist

Before shipping any component, the author MUST verify:

- [ ] Token system used (no hardcoded colors, radii, shadows, borders)
- [ ] Semantic classes OR CSS vars (no mixed patterns in one component)
- [ ] Binding present on styled elements ({FILL: the project's mechanism)
- [ ] Redundant utility classes stripped
- [ ] Slot composition preferred (no prop soup)
- [ ] `className` prop accepted (consumers extend, not override)
- [ ] Tested across {N}+ palette+theme combinations
- [ ] Accessibility baseline met (keyboard nav, ARIA, contrast)

**Violation of any rule = component blocked at the recurring design audit.**
See [AGENT-CHECKLIST.md](./AGENT-CHECKLIST.md) for the full pre-flight.

---

## 8. The Laws of Token Drift Prevention

- **Law 1 — One token per visual concept.** If "header background" is needed, it
  has ONE token. Not a new `--surface`, `--header-bg` variant.
- **Law 2 — New tokens start as justification.** Before adding one: used in 3+
  places? distinct semantic meaning? improves consistency? If no → use existing.
- **Law 3 — Standards change rarely; components change often.** The token
  contract changes through a deliberate process only. Components must not induce
  drift in standards.

---

## 9. The Documentation Axes (where a component doc belongs)

A component can be written about in more than one way, and a doc lands in the
wrong lane by habit unless the lanes are named. There are exactly **three axes**.
Every design-related doc belongs to exactly one — pick before you write.

| Axis | Answers | Home | Granularity |
|---|---|---|---|
| **Usage** | "How do I, as a consumer, use this component in a page?" | `{FILL: usage_doc_dir, e.g. docs/COMPONENTS/}` (optional; opt-in) | one file per documented component |
| **Roster + compliance** | "What is the full component inventory and what is each one's compliance/spec state?" | `COMPONENTS/AUDIT.md` (this bundle) — the **single** enumerated ledger | one file, one row per component |
| **Architecture** | "How does this component *family* fit together — cascade, composition, cross-cutting structure?" | `{FILL: e.g. docs/COMPONENT-ARCHITECTURE.md}` | narrative, family/system level |

The **design spec** itself — the per-component contract (props, tokens, theming,
a11y) from `COMPONENTS/TEMPLATE.md` — is not a fourth axis; it is the normative
artifact the roster's `Spec exists?` column tracks and the checker counts. It
lives at `COMPONENTS/{ComponentName}.md` in this bundle.

### Routing rule — where does a NEW doc go?

- Is it "how a consumer *uses* one component"? → **Usage axis** (`usage_doc_dir`).
- Is it "the *contract* of one component"? → a **design spec**, `COMPONENTS/{Name}.md`.
- Is it "the inventory / who-passes-the-audit"? → **do not create a new file** —
  it is a row in `COMPONENTS/AUDIT.md`.
- Is it "how a *family* of components composes / a cross-cutting structural note"?
  → **Architecture axis**.

### Law 4 — The roster is the single source of truth; never re-enumerate it.

`COMPONENTS/AUDIT.md` is the ONE enumerated component inventory + compliance
ledger. A second inventory MUST NOT be created anywhere else (a "component audit"
note, an architecture doc that re-lists every component, a usage index that
re-tallies compliance). Re-enumeration is exactly how two rosters drift out of
sync (the failure that forced a manual de-duplication pass). If another doc needs
to reference the inventory, it LINKS to `AUDIT.md` — it does not copy the list.
When both a usage doc and a design spec exist for a component, the opt-in
`module.cross-axis-doc-consistency` check (enable via `usage_doc_dir` in the
bundle README) guards them against silent drift.

---

**Established:** 2026-07-22. **Next review:** 2026-07-22 (before Phase 7 implementation).

