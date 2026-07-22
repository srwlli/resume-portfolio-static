---
title: Token Usage Rules — "No Hardcoded Values"
status: living
updated: 2026-07-22
kind: ui-design
kind_version: 1.0.0
template_version: 1.0.0
project: resume-portfolio-static
---
<!-- Authored by /standards-establish from SKILLS/STANDARDS/kinds/ui-design/template/TOKEN-USAGE-RULES.md.
     This is the PROJECT's standard for the "ui-design" kind. Edit to fit the project;
     re-run /standards-update when the ecosystem template evolves. -->


# Token Usage Rules — "No Hardcoded Values"

**All visual properties come from the design-token system. No hardcoded values.
Ever.** This rule is immutable and applies to all components, pages, and
features. It is the doc that settles review arguments — cite it by section.

> The wrong/correct pairs below are token-name-agnostic; substitute this
> project's actual token names where shown as `{--token}`.

---

## What counts as "hardcoded"

### Colors
```tsx
// ✗ HARDCODED                         // ✓ CORRECT
backgroundColor: "#FFFFFF"             backgroundColor: "var(--card)"
color: "#333"                          color: "var(--foreground)"
borderColor: "rgb(200,200,200)"        borderColor: "var(--border)"
backgroundColor: "white"               className="{bg-card text-foreground border-border}"
```

### Border radius
```tsx
// ✗ borderRadius: "8px"               // ✓ borderRadius: "var(--style-radius-md)"
// ✗ style={{ borderRadius: "0.5rem" }} // ✓ let the binding mechanism apply it
```

### Box shadows
```tsx
// ✗ boxShadow: "0 4px 6px rgba(0,0,0,0.1)"   // ✓ boxShadow: "var(--style-shadow-md)"
```

### Spacing & padding
```tsx
// ✗ padding: "16px"; gap: "12px"      // ✓ padding: "var(--layout-spacing-md)"; className="gap-4"
```

### Fonts & typography
```tsx
// ✗ fontFamily: "Arial, sans-serif"   // ✓ fontFamily: "var(--typography-font-sans)"
// ✗ fontSize: "14px"                  // ✓ className="text-base leading-relaxed"
```

### Effects (blur, opacity)
```tsx
// ✗ backdropFilter: "blur(4px)"       // ✓ backdropFilter: "blur(var(--effects-blur-sm))"
// ✗ opacity: "0.5"                    // ✓ className="opacity-50"  (utility maps to a token)
```

### Layout dimensions
```tsx
// ✗ width: "256px"                    // ✓ width: "var(--layout-sidebar-width)"
```

---

## Where hardcoding is never OK

- **In component code** — no literal hex/rgb/named colors, px radii/shadows.
- **In CSS files** — `.card { background: var(--card); }`, not `#fff`.
- **In the theme/config block** — a custom token references another token
  (`--custom-accent: var(--accent)`), never a raw hex.

---

## Common violations & fixes

**Hardcoded button color** → use action tokens
(`className="{bg-primary text-primary-foreground}"`).
**Hardcoded card styling** → let the binding mechanism + surface token own it.
**Hardcoded input styling** → semantic border/background tokens.
**Hardcoded spacing** → spacing-scale utilities or layout vars.

---

## Testing for hardcoded values

- **Visual scan:** hex colors, named colors, `Npx`, `Nrem` literals.
- **Manual:** render in {N}+ palettes; if colors DON'T change on palette switch,
  something is hardcoded.
- **Automated:** the ecosystem checker
  (`SKILLS/STANDARDS/kinds/ui-design/check.mjs`) FAILS on hardcoded color
  literals in view code. {FILL: does this project ALSO have a project-local lint
  rule? If violations recur, add one.}

---

## Enforcement

All hardcoded values are **BLOCKING**:
1. Code review — flagged, fix requested.
2. The recurring audit ([AUDITS/audit-procedure.md](./AUDITS/audit-procedure.md)).
3. The checker (CI-gated).

---

## Checklist: no hardcoded values

- [ ] No hex colors (`#FFFFFF`, `#333`)
- [ ] No named colors (`white`, `black`, `red`)
- [ ] No hardcoded `px` spacing
- [ ] No hardcoded radius values
- [ ] No hardcoded shadows
- [ ] All colors use a token var or a semantic class
- [ ] All spacing uses layout vars or scale utilities
- [ ] All radius/shadow uses tokens

---

## References
- [CORE-PRINCIPLES.md](./CORE-PRINCIPLES.md) — token system authority
- [TOKEN-CONTRACT.md](./TOKEN-CONTRACT.md) — bucket architecture
- [AGENT-CHECKLIST.md](./AGENT-CHECKLIST.md) — pre-flight before a component

