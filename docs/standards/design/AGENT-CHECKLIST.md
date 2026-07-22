---
title: Agent Checklist — Before Building or Fixing Any Component
status: living
updated: 2026-07-22
kind: ui-design
kind_version: 1.0.0
template_version: 1.0.0
project: resume-portfolio-static
---
<!-- Authored by /standards-establish from SKILLS/STANDARDS/kinds/ui-design/template/AGENT-CHECKLIST.md.
     This is the PROJECT's standard for the "ui-design" kind. Edit to fit the project;
     re-run /standards-update when the ecosystem template evolves. -->


# Agent Checklist — Component Standards

**Use this every time you touch a component in `resume-portfolio-static`.**

---

## Before you start (5 minutes)
- [ ] Read [CORE-PRINCIPLES.md](./CORE-PRINCIPLES.md) — the immutable rules
- [ ] Read [README.md](./README.md) — the map for this standards directory

---

## Building a new component

### Step 1: Create the component spec (before writing code)
- [ ] Copy `COMPONENTS/TEMPLATE.md` to `COMPONENTS/{category}/{component-name}.md`
- [ ] Fill all 13 sections (purpose, anatomy, props, token usage, dos/don'ts,
      theming, a11y, testing matrix, code example, related, status, history, sign-off)
- [ ] Verify all token references match the canonical token source

### Step 2: Semantic token consumption
- [ ] [CORRECT] Semantic classes ({FILL: e.g. `bg-card`, `text-foreground`})
- [ ] [WRONG] NOT hardcoded (`bg-zinc-900`, `#1a1a1a`, `rgb(...)`)
- [ ] [CORRECT] CSS vars for open buckets (`style={{ gap: "var(--layout-gutter)" }}`)

### Step 3: Binding (if styled)
- [ ] Styled element (card/button/input/radius/shadow user) → binding present on ancestor ({FILL: mechanism})
- [ ] Redundant utilities stripped (`rounded-*`, `shadow-*`, `border`, `bg-white`)
- [ ] Container/layout → provides the binding context; children inherit

### Step 4: Anatomy & composition
- [ ] [CORRECT] Slot composition (flexible slots)
- [ ] [WRONG] NOT prop soup (no 10+ config props)
- [ ] Accept `className` (extends, not replaces)

### Step 5: Testing
- [ ] {N}+ palettes · {N}+ themes · light AND dark each
- [ ] Mobile / tablet / desktop
- [ ] Keyboard nav (if interactive)
- [ ] Contrast in the highest-contrast palette (a11y floor)
- [ ] Fill the spec's Testing Matrix

### Step 6: Accessibility
- [ ] Keyboard: tab focus, logical order, no trap
- [ ] ARIA: icon buttons have `title`/`aria-label`; inputs have `<label>`
- [ ] Contrast: 4.5:1 min; light + dark both pass
- [ ] No meaning by color alone

### Step 7 & 8: Docs + PR
- [ ] Spec complete (13 sections), token usage mapped, matrix filled
- [ ] PR title: `feat(design): add {component-name} component`

---

## Fixing an existing component
1. Read the spec (if present) + [CORE-PRINCIPLES §7 checklist](./CORE-PRINCIPLES.md)
2. Check the latest audit report ([AUDITS/](./AUDITS/)) for this component
3. Fix code (don't change the spec unless the spec was wrong); test across palettes/modes
4. Update the spec's Change History; PR title: `fix(design): {component-name} — {issue}`

---

## Enforcement rules (non-negotiable — these BLOCK your PR)
- [WRONG] Hardcoded colors (`bg-zinc-900`, `#1a1a1a`, `rgb(...)`) — **checker FAILs on this**
- [WRONG] Hardcoded radii / shadows / borders (no semantic class)
- [WRONG] Wrong background token (surface element not using the surface token)
- [WRONG] Cross-bucket misuse (action color as a structural border)
- [WRONG] Missing binding on styled ancestors
- [WRONG] Redundant utilities on styled children
- [WRONG] Prop soup instead of slot composition
- [WRONG] Testing matrix not filled
- [WRONG] Accessibility violations (keyboard, contrast, ARIA)
- [WRONG] Spec incomplete (empty sections)

[CORRECT] **These pass:** semantic classes/CSS vars (consistent), binding on styled
ancestors, no redundant utilities, slot composition, `className` accepted, token
usage documented, matrix filled, a11y verified, spec complete.

---

## Quick reference: the core rules
1. Every visual decision = a token from the bucket system
2. Semantic classes bind directly to tokens
3. When classes fail, use CSS vars
4. Styled children need the binding context
5. Strip redundant utilities from styled children
6. Tokens apply automatically via the provider (don't manually apply)
7. Slot composition > prop soup
8. Structural tokens ≠ action tokens
9. Test across palettes, themes, modes, devices, keyboard, contrast

---

## When you're stuck
1. **"What tokens exist?"** → {FILL: registry / theme block location}
2. **"What's the standard for {component}?"** → its spec in `COMPONENTS/`
3. **"Can I hardcode this?"** → NO. Use a token or propose a new one.
4. **"Is this a violation?"** → [CORE-PRINCIPLES §7](./CORE-PRINCIPLES.md)
5. **"What's the header standard?"** → [CORE-PRINCIPLES §5](./CORE-PRINCIPLES.md)

---

**Established:** 2026-07-22. **Audit cadence:** {FILL}. **Enforcement:** all
violations are blocking at the recurring audit; the checker FAILs the build on
hardcoded colors.

