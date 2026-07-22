---
title: Component Spec Template
status: living
updated: 2026-07-22
kind: ui-design
kind_version: 1.0.0
template_version: 1.0.0
project: resume-portfolio-static
# always_doc: true   # (optional) uncomment on a real component's spec to FORCE it
#                    # into the checker's must-doc set even if it is NOT imported by
#                    # >=2 modules — the override for an operator-locked / critical
#                    # component that reaches consumers indirectly and so falls
#                    # below the shared-component threshold. See COMPONENTS/README
#                    # note or always-doc.json for the project-list alternative.
---
<!-- Authored by /standards-establish from SKILLS/STANDARDS/kinds/ui-design/template/COMPONENTS/TEMPLATE.md.
     This is the PROJECT's standard for the "ui-design" kind. Edit to fit the project;
     re-run /standards-update when the ecosystem template evolves. -->


# Component Spec: {ComponentName}

> Copy this file to `standards/design/COMPONENTS/{ComponentName}.md` (name-matched to
> the source component) and fill every section BEFORE writing or modifying the
> component. No component ships with empty sections. Run through
> `AGENT-CHECKLIST.md` before opening the PR. (When copied per component, set
> `status: living` and update the date; this TEMPLATE.md itself stays as the
> reusable skeleton.)
>
> **always_doc override:** if this component MUST have a spec regardless of how many
> modules import it (e.g. an operator-locked single viewer reached indirectly), set
> `always_doc: true` in the frontmatter above. The checker
> (`module.component-spec-coverage`) then treats it as required. For a component that
> has NO spec yet but must be forced into the must-doc set, add its name to
> `COMPONENTS/always-doc.json` (a JSON array of component names) instead — that makes
> the checker report it as a missing required spec until one is written.

---

## 1. Purpose
One paragraph. What does this component do, why does it exist, what problem does
it solve? Describe the user-facing job, not the file name.

## 2. Anatomy
JSX or ASCII diagram of the structure. Show the slots and where children land.

```jsx
<{ComponentName} prop="value">
  <{ComponentName}.SlotA>…</{ComponentName}.SlotA>
</{ComponentName}>
```

## 3. Props

| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `{title}` | `{ReactNode}` | yes | — | {…} |
| `className` | `string` | no | `undefined` | Consumer override for the outer element |

## 4. Token Usage
Map every token this component reads. NO hardcoded values (see TOKEN-USAGE-RULES.md).

| Where | Token | Bucket | Notes |
|---|---|---|---|
| outer background | `{var(--card)}` | colors | surface |
| outer border | `{var(--border)}` | colors | structural |
| text | `{var(--foreground)}` | colors | primary text |

## 5. Dos and Don'ts
- [ ] [CORRECT] Semantic classes where they cover the need
- [ ] [CORRECT] CSS vars for open-bucket tokens
- [ ] [WRONG] NO hardcoded colors / radii / shadows / fonts
- [ ] [WRONG] NO redundant utilities on styled children
- [ ] [WRONG] NO prop soup — prefer slot composition
- [ ] [CORRECT] Accept `className`; component owns layout structure
- [ ] Component-specific: {add domain rules}

## 6. Theming Behavior

| Axis | Behavior |
|---|---|
| **Palette swap** | {surface/border/text update via color tokens; no component state} |
| **Theme swap** | {radius/padding shift via style/layout tokens} |
| **Mode flip** | {inherits palette's dark variant; no special-casing} |

## 7. Accessibility

| Concern | Implementation |
|---|---|
| Keyboard nav | {…} |
| ARIA | {…} |
| Contrast | Verified against highest-contrast palette; meets 4.5:1 |
| Color-only meaning | None — content is text-driven |
| Reduced motion | Respect `prefers-reduced-motion` if animated |

## 8. Testing Matrix
Render across {N}+ palettes × {N}+ themes × light/dark; verify no visual breaks.

| Palette | Theme | Mode | Status | Notes |
|---|---|---|---|---|
| {default} | {default} | dark | ☐ | |
| {default} | {default} | light | ☐ | |
| {…} | {…} | {…} | ☐ | |

## 9. Code Example
```tsx
import { {ComponentName} } from "{@/components/…}"

export default function MyPage() {
  return <{ComponentName} title="…" />
}
```

## 10. Related Components

| Component | Relationship |
|---|---|
| {Sibling} | {…} |

## 11. Implementation Status

| File | Status |
|---|---|
| `{components/.../{component-name}.tsx}` | shipped / wip / planned |
| this spec | living |

## 12. Change History

| Date | Author | Change |
|---|---|---|
| 2026-07-22 | ASSISTANT | Initial spec authored |

## 13. Sign-Off
- **Established:** 2026-07-22
- **Audit cadence:** {FILL}
- **Next review:** 2026-07-22
- **Locked sections:** §4 Token Usage, §6 Theming, §7 Accessibility (changes need a follow-up)

