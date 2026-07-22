---
kind: testing
status: living
title: Resume Portfolio Static Testing Standard
updated: 2026-07-22
purpose: Authority-root template for project test-estate standards
audience: Project test owners, test automation leads, agent developers
scope: Test declaration (homes, runner, gates, determinism, conditional regression/corpus)
---
<!-- Authored by /standards-establish from SKILLS/STANDARDS/kinds/testing/template/README.md.
     This is the PROJECT's standard for the "testing" kind. Edit to fit the project;
     re-run /standards-update when the ecosystem template evolves. -->


# Resume Portfolio Static Testing Standard

> **This is the authority-root of Resume Portfolio Static's test-estate standard.** It declares
> the universal sub-types every governed test estate must DECLARE, the
> DECLARE-not-implement rule, and the two-tier applicability floor. The filled
> per-project declarations live in [TEST-ESTATE.md](TEST-ESTATE.md).
>
> Provenance: rendered from `SKILLS/STANDARDS/kinds/testing/` (the `testing`
> standard-KIND). Do not edit rule text here — a rule change is a KIND change, made
> upstream and re-synced via `/standards-update --kind=testing`.

## Usage

To use this standard in a new project:

1. **Establish the standard:** This project keeps the testing bundle at `docs/standards/testing/`.
2. **Fill the sub-type declarations:** Complete the declarations template to specify WHERE tests live, WHICH runners you use, WHERE they gate, HOW they stay deterministic, and (if applicable) how you handle regression and live reference corpora.
3. **Author TEST-ESTATE.md:** Keep the project-specific declarations in [TEST-ESTATE.md](TEST-ESTATE.md).
4. **Validate:** Run the checker via `node SKILLS/STANDARDS/kinds/testing/check.mjs --project-root=<ABS_PROJECT_ROOT> --json` to confirm all required sub-types are declared.

---

## What this standard governs

A project's **test estate**: where its tests live, how they run, where they are
enforced, how they stay reproducible, and how it detects regression. The one rule:

> **A governed test estate DECLARES its testing decisions — it does not leave them
> to be reverse-engineered from config.** A new agent must be able to read the
> declaration and run, extend, and enforce the tests the intended way.

This standard is **project-agnostic**. It does NOT mandate a runner (vitest / jest /
pytest), a layout (inline `__tests__/` vs. a standalone suite dir), or a specific
gate. It validates that each applicable sub-type is DECLARED in the canonical shape —
"the project declares WHERE its tests live", not "tests must be inline".

## Two-tier applicability

The `testing` kind APPLIES to every project that ships runnable code — nothing
testable escapes. But it grades in two tiers:

- **No test estate at all** → the checker reports **WARN**, not FAIL: it renders the
  to-do list of what a governed test estate needs. A code-bearing project with zero
  tests is told what it needs, never blocked from working.
- **A test estate exists** → a MISSING sub-type declaration is a **FAIL**. Once you
  have tests, not declaring where they live / how they run / how they gate is drift.

A pure-docs or pure-data repo with no runnable code is `not_applicable`.

## The sub-types (DECLARE, don't implement)

| Sub-type | The project DECLARES… | (NOT) |
|---|---|---|
| **test-homes** | WHERE tests live + the code/test tree relationship + the test layers (unit/integration/e2e/calibration) | not "must be inline `__tests__/`" |
| **runner** | WHICH runner(s) + the exact COMMANDS that invoke each layer | not "must use vitest" |
| **gates** | the enforcement points (pre-commit / CI / merge) + the strict-vs-advisory policy at each | not "must have a git hook" |
| **determinism** | HOW tests are made reproducible (seeding, fixtures, canaries, flake policy) | not "must use a fixed RNG seed" |
| **regression** *(conditional)* | IF the project tracks a baseline / thresholds: the baseline artifact + drift detection + re-baseline discipline | required only when a baseline exists |
| **reference-corpus** *(conditional)* | IF the gates assert against an external/live ORACLE (a ground-truth corpus, eval set, conformance vectors): the oracle + its provenance, versioning/pinning, and oracle-drift detection + re-anchor discipline | required only when a live oracle backs the gates |

Two sub-types are CONDITIONAL:

- `regression` — a project with no baseline/threshold concept is not penalized for it.
- `reference-corpus` — a project whose gates assert only against **in-line hand-written
  expected values** is not penalized for it. It applies only when the gates trust an
  **external or live reference dataset** that itself defines "correct" (a benchmark
  corpus read live at gate time, an ML eval set, conformance vectors from a spec). Such
  an oracle needs its own governance: it is the **inverse of regression** (drift of the
  *oracle* the baseline was measured against, not drift of *outputs*) and orthogonal to
  `determinism` (trustworthiness + currency of an assertion *input*, not run
  reproducibility). A corpus **canary** that fails when the oracle silently moves is the
  canonical drift-detector; the re-anchor is an intentional, reviewed move — never silent.

Every non-conditional sub-type is required once a test estate exists.

## Conformance

Run the checker:

```bash
node SKILLS/STANDARDS/kinds/testing/check.mjs --project-root=<ABS_PROJECT_ROOT> --json
```

- `core` checks (`testing.applicable`, `testing.estate-present`, each
  `subtype.<id>.present`) drive the verdict. A missing declaration in a project that
  HAS tests is a FAIL; the same in a project with NO tests is a WARN (the to-do list).
- `module` checks (`subtype.<id>.shape`) are drift signals — a declaration that
  exists but is thin. Triage, don't ignore.
- The authored standard must carry the `kind: testing` / `status: living`
  frontmatter (this file does) so a vault projector discovers it by its mark.

## Project implementation

The current estate is a governance smoke suite. As site implementation begins, it
will grow to cover every directory-index page, relative link and asset, forbidden
placeholder, accessibility contract, responsive viewport, print resume, reduced
motion behavior, and the `/resume-portfolio-static/` GitHub Pages base path.

The production artifact remains static HTML, CSS, JavaScript, and assets. The local
preview command is test/development tooling only and is never required by GitHub
Pages.

## Conforming instance #1

`gridiron-franchise` STAFF/GF-TEST is the reference conforming instance: an
inline+standalone hybrid (vitest unit tests colocated in `src/**/__tests__/` + a
standalone calibration suite in `STAFF/GF-TEST/suites/`), a declared runner set
(vitest + `npx tsx`), pre-commit + CI gates with a strict-vs-advisory split, fixed-seed
determinism, a tracked `baseline.json` + append-only `history.jsonl` regression
discipline, and — the `reference-corpus` exemplar — gates that assert generated
distributions against a **live external NFL ground-truth corpus** read live at gate
time (`calibration/career-stats-tables.json`, the 1999–2025 medians, consumed by
`suites/regression-gates.ts` and deliberately never vendored into `fixtures/` so it
cannot drift from ground truth), guarded by a dedicated **corpus canary**
(`fixtures/corpus-canary.json`, an inline test) that fails when the oracle itself
moves. Its `TEST-ESTATE.md` declares each applicable sub-type — it is where the
universal axes (including reference-corpus, surfaced by GF-TEST's own pressure-test)
were derived from.
