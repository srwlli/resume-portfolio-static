<!-- Authored by /standards-establish from SKILLS/STANDARDS/kinds/ui-design/template/COMPONENTS/AUDIT.md.
     This is the PROJECT's standard for the "ui-design" kind. Edit to fit the project;
     re-run /standards-update when the ecosystem template evolves. -->

<!-- PROVENANCE: rendered from standard-KIND `ui-design`
     (SKILLS/STANDARDS/kinds/ui-design/template/COMPONENTS/AUDIT.md).
     Do not edit the rule shape here; a rule change is a KIND change — edit the
     template and re-sync via /standards-update --kind=ui-design. Rows ARE
     project content: this file is mutated in-project by the audit cadence. -->
---
title: Components Compliance Inventory
status: living
updated: 2026-07-22
kind: ui-design
kind_version: 1.4.0
template_version: 1.0.0
project: resume-portfolio-static
---

# Components Compliance Inventory

**Last updated:** 2026-07-22
**Last audit cycle:** 2026-07-22 (pre-implementation inventory)
**Total components in scope:** 10 (static page component patterns; implementation begins in Phase 7)

---

## How this file works

This is the **rolling state document** for design-standards compliance across the
project's component surface. It is the enumerated inventory the `document` verb's
IDENTIFY step reads as its worklist (see the kind's document-ui-design-standards.md)
and the audit cadence refreshes (see [../AUDITS/audit-procedure.md](../AUDITS/audit-procedure.md)).

It is mutated by:

1. **Initial population** — first full enumeration when the standard is established.
2. **Each audit cycle** — refreshes the rows on new fixes / new drift, and writes a
   dated snapshot at `../AUDITS/2026-07-22-audit.md`. This file is the LIVING
   summary; the dated files are immutable history.

### ENUMERATION RULE (mandatory — no blanket rows)

Every component in scope gets **its own row** in exactly one table below
(Violations, Deferred, Compliant, or Not Yet Audited). A blanket classification
("every other .tsx is implicitly Compliant") is NOT permitted — it hides the
per-component `Spec exists?` state the standard tracks and makes coverage
un-measurable. The `Compliant` table row count + the other tables' row counts MUST
sum to **Total components in scope**. If they don't, the inventory is incomplete —
finish the enumeration before calling the audit done.

---

## Violations

(Components currently failing one or more rules from `CORE-PRINCIPLES.md`.)

| Component | File | Violation type(s) | Severity | Detected | Notes |
|---|---|---|---|---|---|
| _(none)_ | | | | | |

---

## Deferred

(Components flagged as Violating but explicitly deferred to a follow-up stub/WO.)

| Component | File | Reason for deferral | Deferred to |
|---|---|---|---|
| _(none)_ | | | |

---

## Compliant

(Components verified to pass all rules in the most recent audit cycle. ENUMERATE
every compliant component — one row each; no blanket "all others" rule. `Shared?`
= imported by >=2 modules, i.e. part of the must-doc set the checker measures.
`Spec exists?` = a name-matched `COMPONENTS/<Name>.md` is present.)

| Component | File | Shared? | Last verified | Spec exists? |
|---|---|---|---|---|
| Header/navigation | shared HTML pattern | yes | 2026-07-22 | spec planned |
| Hero | shared HTML pattern | yes | 2026-07-22 | spec planned |
| Section header | shared HTML pattern | yes | 2026-07-22 | spec planned |
| Card | shared HTML pattern | yes | 2026-07-22 | spec planned |
| Evidence badge | shared HTML pattern | yes | 2026-07-22 | spec planned |
| Responsive table | shared HTML pattern | yes | 2026-07-22 | spec planned |
| Timeline | shared HTML pattern | yes | 2026-07-22 | spec planned |
| Resume block | shared HTML pattern | yes | 2026-07-22 | spec planned |
| Transparency notice | shared HTML pattern | yes | 2026-07-22 | spec planned |
| Footer | shared HTML pattern | yes | 2026-07-22 | spec planned |

---

## Architectural Notes

The site has no component framework or separate component files. Patterns are
semantic HTML documented here and implemented with classes backed by custom
properties in `assets/css/site.css`. Layout sizing is allowed when it is a
responsive layout rule; color, radius, shadow, typography, and motion must use
tokens. This inventory is the design worklist for Phase 7.

---

## Not Yet Audited

(Component files present in the codebase but not yet inspected by any audit cycle.
New components land here first, then move to Compliant/Violations on the next cycle.)

| Component | File | First seen |
|---|---|---|
| _(none)_ | | |

---

## References

- [CORE-PRINCIPLES.md](../CORE-PRINCIPLES.md) — the rules
- [AUDITS/audit-procedure.md](../AUDITS/audit-procedure.md) — the cycle that maintains this file
- [TEMPLATE.md](./TEMPLATE.md) — the 13-section spec a Compliant component must have (Spec exists? column)

