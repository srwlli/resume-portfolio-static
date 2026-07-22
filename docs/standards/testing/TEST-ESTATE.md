---
kind: testing
status: living
title: "Resume Portfolio Static Test Estate"
updated: 2026-07-17
---
<!-- Authored by /standards-establish from SKILLS/STANDARDS/kinds/testing/template/TEST-ESTATE.md.
     This is the PROJECT's standard for the "testing" kind. Edit to fit the project;
     re-run /standards-update when the ecosystem template evolves. -->


# Resume Portfolio Static Test Estate

> The filled, per-project declaration of Resume Portfolio Static's test estate. Authored FROM the
> real test system — do not invent values; read them from what the project actually
> runs. One section per applicable sub-type. See [README.md](README.md) for the rule
> each section satisfies. All declarations below are filled for this project.

## 1. Test homes — WHERE tests live

Declare where tests live and how the test tree relates to the code tree.

- **Placement model:** `separated` — tests live in `tests/`, while deployable code
  remains in page directories and `assets/`.
- **Test layers + their homes:**

  | Layer | Home (path) | Purpose |
  |---|---|---|
  | governance smoke | `tests/` | Validate project standards, package metadata, and static-site invariants before pages exist. |
  | static-file | `tests/` | Validate page links, assets, accessibility, responsive, print, and base-path behavior once implementation exists. |

## 2. Runner — WHICH runner + HOW to invoke

Declare the runner(s) and the exact commands. Declared, not discovered.

- **Runner(s):** Node.js built-in `node:test` runner; no production test dependency.
- **Invocation per layer:**

  | Layer | Command |
  |---|---|
  | governance smoke | `npm test` or `node --test tests/*.test.mjs` |
  | targeted test | `node --test tests/<file>.test.mjs` |
  | local preview | `npm run preview` (development-only, static-file server) |

## 3. Gates — WHERE tests are enforced + policy

Declare the enforcement points and the block-vs-warn policy at each.

| Gate | Trigger | Policy | What blocks |
|---|---|---|---|
| pre-commit | when governed project or test files are staged | strict for available tests | a failing `npm test` blocks the commit when the hook invokes it |
| CI / merge | pull request or Pages publication workflow | strict | test failure, broken static contract, or forbidden placeholder blocks publication |

- **Bypass:** `git commit --no-verify` is permitted only for a documented emergency and must be followed by a passing test run before merge.

## 4. Determinism — HOW tests stay reproducible

Declare how a failure means "the code changed", not "the test drifted".

- **Reproducibility mechanism:** deterministic filesystem reads, sorted paths, no network calls, no clock-dependent assertions, and no randomness.
- **Fixtures / golden inputs:** `tests/fixtures/` is reserved for pinned HTML/content fixtures introduced with the site implementation; the Phase 4 smoke suite uses governed repository files directly.
- **Canary (if any):** no external corpus or live oracle is used.
- **Flake policy:** a failure is reproduced locally with the same command; no automatic retries or silent quarantine are allowed.

## 5. Regression — baseline + drift discipline *(if applicable)*

Complete this section ONLY if the project tracks a baseline / thresholds / budgets.
If it has no baseline concept, state that and delete the rest.

- **Baseline artifact:** None in Phase 4; the project has no numeric or snapshot baseline concept yet.
- **Drift detection:** Not applicable until a reviewed baseline is introduced.
- **Re-baseline discipline:** Any future baseline must move only through an intentional, reviewed change.

## 6. Reference corpus — oracle / ground-truth governance *(if applicable)*

Complete this section ONLY if the project's gates assert generated output against an
EXTERNAL or LIVE reference dataset — an **oracle** that itself defines what "correct"
means (a benchmark corpus read at gate time, an ML eval set, conformance vectors pulled
from a spec, a snapshot oracle). If the gates assert only against in-line hand-written
expected values, state that and delete the rest — this sub-type does not apply.

- **Oracle artifact + provenance:** None. Gates use repository-local hand-authored expectations and governed documents, not an external or live oracle.
- **Versioning / pinning:** Not applicable.
- **Oracle-drift detection:** Not applicable.
- **Re-anchor discipline:** Not applicable; adding an external oracle requires a reviewed testing-standard update.

> This is the INVERSE of §5 regression (which governs drift of your OUTPUTS vs a
> baseline); §6 governs drift of the ORACLE that baseline was measured against. If the
> oracle is your project's own persisted data model, its source-of-record provenance is
> governed by the `data` kind's provenance sub-type — this section governs the
> testing-native drift-of-the-oracle + re-anchor axis on top of that.

---

_Governed by the `testing` standard-KIND. Validate:
`node SKILLS/STANDARDS/kinds/testing/check.mjs --project-root=<ABS> --json`._
