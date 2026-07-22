---
title: Design Audit Procedure
status: living
updated: 2026-07-22
kind: ui-design
kind_version: 1.0.0
template_version: 1.0.0
project: resume-portfolio-static
---
<!-- Authored by /standards-establish from SKILLS/STANDARDS/kinds/ui-design/template/AUDITS/audit-procedure.md.
     This is the PROJECT's standard for the "ui-design" kind. Edit to fit the project;
     re-run /standards-update when the ecosystem template evolves. -->


# Design Audit Procedure

**Run:** before each implementation phase.
**Duration:** ~20-30 minutes.
**Owner:** {FILL: domain}.
**Outcome:** a new dated report at `AUDITS/2026-07-22-audit.md` (from
`REPORT-TEMPLATE.md`) documenting violations; the rolling component inventory
updated with current compliance state.

> This audit is the **living-doc heartbeat** — it is what keeps this standard
> honest against the code rather than write-once-rot. Its automated twin is the
> ecosystem checker; run BOTH.

---

## The fast path: run the checker first

```bash
node SKILLS/STANDARDS/kinds/ui-design/check.mjs --project-root={ABS_PATH} --json
```

- **FAIL (exit 2)** → hardcoded color literals in view code. These are critical
  (break palette/theme swap). Record every hit.
- **WARN (exit 1)** → standard not established, arbitrary-value utilities,
  missing specs/checklist. Triage below.

The manual steps below EXPAND on what the checker flags and cover what it can't
(visual/contrast/keyboard checks a grep can't do).

---

## Audit scope

Inventory these surfaces every cycle:
```
{FILL: e.g.}
1. components/ui/*        — primitives
2. components/*           — domain components
3. app/**/page.tsx        — pages
4. app/**/layout.tsx      — layouts
```
Out of scope: `node_modules/`, build output, generated files, non-rendering
utility code.

---

## The 6-step procedure

### Step 1 — Hardcoded colors (5 min)
Find colors that are NOT semantic tokens (hex / rgb / hsl / named).
```bash
# the checker already does this; to inspect manually:
grep -rE "#[0-9a-fA-F]{3,8}|rgb\(|rgba\(|hsl\(" {components/ app/} \
  --include="*.tsx" --include="*.ts" | grep -v "var(--" | grep -v "// ALLOWED:"
```
**Action:** record each violation with `{file}:{line}` + the string. [CRITICAL] critical.

### Step 2 — Hardcoded spacing / radii / shadows (5 min)
```bash
grep -rE "rounded-\[[0-9]|shadow-\[[0-9]|p-\[[0-9]|m-\[[0-9]|gap-\[[0-9]" {components/ app/} --include="*.tsx"
grep -rE "borderRadius:.*\"[0-9]+px|boxShadow:.*\"[0-9]" {components/ app/} --include="*.tsx" | grep -v "var(--"
```
**Action:** record; suggest the bucket token. Classify sizing-not-styling
(`w-[Npx]`) as legitimate. [MAJOR] major.

### Step 3 — Binding discipline (3 min)
Find styled children (Card/Button/Input) whose ancestor lacks the binding
mechanism, or that carry redundant utilities.
```bash
grep -rn "<Card\b\|<Button\b\|<Input\b" {components/ app/} --include="*.tsx"
```
**Manual check per hit:** binding present on the nearest layout ancestor? redundant
utilities on the child? {FILL: if this project uses class-composition instead of a
`data-style` attribute, note that here — this step becomes an architectural check.}

### Step 4 — Component specs (3 min)
Every shipping component in scope has a spec in `COMPONENTS/`. Any component file
without one → missing-spec. [MINOR] minor (populated incrementally, not retroactively).

### Step 5 — CORE-PRINCIPLES §7 cross-reference (3 min)
For each component touched since the prior audit (`git log --since=...`),
spot-check the §7 checklist. Record failures.

### Step 6 — Generate the report (5 min)
Create `AUDITS/2026-07-22-audit.md` from `REPORT-TEMPLATE.md`. Update the
rolling component inventory — move components between Violations and Compliant.

---

## Severity levels

| Level | Impact | Example | Fix timeline |
|---|---|---|---|
| [CRITICAL] Critical | Breaks palette/theme swap | Hardcoded hex color | This cycle |
| [MAJOR] Major | Visual inconsistency | Arbitrary spacing value | {FILL} |
| [MINOR] Minor | Missing docs | Spec not created | Backlog |

---

## After the audit
1. Critical → file a follow-up; promote to a workorder if needed
2. Major → current sprint
3. Minor → backlog
4. Update the rolling inventory
5. Note which violations carried over from the prior cycle (recurring-drift signal)

---

## References
- [CORE-PRINCIPLES.md](../CORE-PRINCIPLES.md) · [TOKEN-USAGE-RULES.md](../TOKEN-USAGE-RULES.md)
- [TOKEN-CONTRACT.md](../TOKEN-CONTRACT.md) · [AGENT-CHECKLIST.md](../AGENT-CHECKLIST.md)
- [REPORT-TEMPLATE.md](./REPORT-TEMPLATE.md) — the dated report each run produces

---

**Cadence:** {FILL}. **Next review of this procedure:** 2026-07-22.

