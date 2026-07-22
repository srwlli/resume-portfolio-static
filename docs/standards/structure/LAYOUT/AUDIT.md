<!-- Authored by /standards-establish from SKILLS/STANDARDS/kinds/structure/template/LAYOUT/AUDIT.md.
     This is the PROJECT's standard for the "structure" kind. Edit to fit the project;
     re-run /standards-update when the ecosystem template evolves. -->

<!-- PROVENANCE: rendered from standard-KIND `structure`
     (SKILLS/STANDARDS/kinds/structure/template/LAYOUT/AUDIT.md).
     Do not edit the rule shape here; a rule-SHAPE change is a KIND change — edit the
     template and re-sync via /standards-update --kind=structure. Rows ARE project
     content: this file is mutated in-project by the layout audit cadence. -->
---
title: Structure Layout Inventory
status: living
updated: 2026-07-22
kind: structure
kind_version: 1.0.0
template_version: 1.0.0
project: resume-portfolio-static
---

# Structure Layout Inventory

**Last updated:** 2026-07-22
**Last audit cycle:** 2026-07-22
**Total declared homes in scope:** 6

---

## How this file works

This is the **rolling state document** for the project's layout: every declared
`role → dir` home enumerated with its on-disk existence and (for the planner/coder
pair) its overlap state. The layout audit cadence (see maintain-structure-standards.md)
refreshes it.

### ENUMERATION RULE (mandatory — no blanket rows)

Every role declared in `LAYOUT/TEMPLATE.md` gets **its own row** below. A blanket
statement ("all other homes exist") is NOT permitted — it hides the per-home state the
standard tracks. The row count MUST equal **Total declared homes in scope**. If it
doesn't, the inventory is incomplete — finish the enumeration before calling the audit
done.

`Exists?` = the declared dir is on disk. `Overlaps?` applies only to the
`planner`/`coder` rows — it is `yes` if the planner and coder dir sets intersect (a
tree-separation VIOLATION, hard-FAIL) and `no` otherwise.

---

## Declared homes

| role | declared dir(s) | Exists? | Overlaps? (planner/coder only) |
|---|---|---|---|
| docs | docs/ | yes | |
| code | assets/ | no | no |
| scripts | scripts/ | yes | |
| tests | tests/ | no | |
| planner | docs/ | yes | no |
| coder | assets/ | no | no |

---

## Required-file existence (trigger baseline)

The trigger-driven canon and its per-project level. `Level` reflects the promote row
in `LAYOUT/TEMPLATE.md` (module by default; core if promoted).

| required file | trigger | Level | Exists? |
|---|---|---|---|
| README.md | project | core | yes |
| VISION.md | project | core-if-promoted | yes |
| CONTEXT.md | context-doc | core-if-promoted | yes |
| AGENTS.md | agents-doc | core-if-promoted | yes |
| scripts/README.md | scripts-dir | core (if scripts/ exists) | yes |

---

## Drift / WARN observations

(Module-level signals: a missing WARN-level required file, stray top-level source, a
tests home not following convention. Recorded here so a WARN is a tracked observation,
not a silent pass.)

| observation | first seen | note |
|---|---|---|
| Code and tests homes are declared before implementation | 2026-07-22 | Expected until Phases 4 and 7. |

---

## Architectural Notes

The static project's code is intentionally not under `src/`: its seven directory-index
pages and shared `assets/` are the deployable GitHub Pages artifact. The `tests/` home
will be created by the testing-standard phase. `.github/workflows/` is reserved for
the publication phase.

---

## References

- [../README.md](../README.md) — the structure standard (existence + layout + tree-separation)
- [TEMPLATE.md](./TEMPLATE.md) — the role→dir declaration the project fills
