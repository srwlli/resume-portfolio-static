<!-- Authored by /standards-establish from SKILLS/STANDARDS/kinds/structure/template/LAYOUT/TEMPLATE.md.
     This is the PROJECT's standard for the "structure" kind. Edit to fit the project;
     re-run /standards-update when the ecosystem template evolves. -->

<!-- PROVENANCE: rendered from standard-KIND `structure`
     (SKILLS/STANDARDS/kinds/structure/template/LAYOUT/TEMPLATE.md).
     This is the project's LAYOUT DECLARATION — the role->dir table the checker reads
     via --standard, plus the optional promote row. A rule-SHAPE change is a KIND
     change — edit the template and re-sync via /standards-update --kind=structure.
     The FILLED table is project content. -->
---
title: "Structure Layout Declaration"
status: living
updated: 2026-07-22
kind: structure
project: resume-portfolio-static
---

# Structure Layout Declaration

> The project's concrete directory homes and the checker-read declarations. An agent
> restructuring the project reads THIS to know which tree is planner vs coder and where
> each role lives. Do NOT author from convention — read the LIVE tree and declare what
> is actually there. The `check.mjs` reads this table to verify the dirs exist and the
> planner/coder sets do not intersect.

## Role → dir(s)

Fill one row per role. `dir(s)` is a comma-separated list of project-root-relative
directories. `planner` and `coder` are the load-bearing pair — the checker enforces
they do not overlap (the tree-separation invariant). Omit a role only if the project
genuinely has no such home.

| role | dir(s) |
|---|---|
| docs | docs/ |
| code | assets/ |
| scripts | scripts/ |
| tests | tests/ |
| planner | docs/ |
| coder | assets/ |

## Promote (opt-in — lift a module existence check to core FOR THIS PROJECT)

By default `VISION.md`, `CONTEXT.md`, `AGENTS.md`, and the `STAFF/` seat tree are
**module (WARN)** checks — the ecosystem baseline, so a bare leaf/library repo is not
false-FAILed. A project for which one of these is genuinely mandatory (an ecosystem
*domain* carries all three docs; a seat-hosting project carries `STAFF/`) PROMOTES it
to **core (FAIL)** for itself by listing the trigger id(s) here. The checker reads
this row and lifts only the named triggers, only for this project. Trigger ids:
`vision`, `context`, `agents`, `staff`. (`staff` min bar when core: `STAFF/` exists
and is non-empty — ≥1 seat dir or a README.md; see the bundle README §STAFF.)

| promote | vision, context, agents |

## Project-specific required files (optional)

Beyond the trigger-driven canon, a project may declare additional files that MUST
exist. List them (project-root-relative); the checker treats each as a core existence
assertion. Or `_(none)_`.

| required file | why |
|---|---|
| .github/workflows/ | GitHub Pages publication surface, added in Phase 8. |

## Notes

The production site is a static, directory-index HTML site. Each declared page lives
in its own directory with an `index.html`; shared browser assets live under `assets/`.
Development tests live under `tests/`, and automation lives under `scripts/`.
`docs/standards/` is planning/governance documentation and must not contain runtime
site code. The ASSISTANT workorder tree is external to this repository and does not
overlap the target code tree.

---

## References

- [../README.md](../README.md) — the structure standard (existence + layout + tree-separation)
- [AUDIT.md](./AUDIT.md) — the enumerated declared-homes inventory
