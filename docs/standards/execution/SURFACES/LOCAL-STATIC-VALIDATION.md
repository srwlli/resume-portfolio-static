---
title: "Executor Surface Spec: Local Static Validation"
status: living
updated: 2026-07-22
kind: execution
surface: local-static-validation
---

# Executor Surface Spec: Local Static Validation

## 1. What it is

The development-only test runner scans the static portfolio, validates required pages, assets, links, and forbidden dependencies, and emits test evidence. It never becomes a production server.

## 2. Generation (generation sub-type)

- **Output format:** repository-relative static validation results and exit status.
- **Reproducible inputs:** tracked source tree, package scripts, fixed page inventory, and repository base path.
- **Refuse-to-emit condition:** missing files, unresolved links, placeholders, or server/framework/database dependencies fail the run.
- **Determinism note:** same tree and command produce the same result.
- **Authority (ROUTE):** See: [GENERATION.md](../GENERATION.md) and [testing standard](../../testing/README.md).

## 3. Contract (contracts sub-type)

- **Authoritative contract:** [CONTRACTS.md](../CONTRACTS.md) and [testing standard](../../testing/README.md).
- **Validate-before-accept:** `npm run test:run` must pass before a commit or publication artifact is accepted.
- **Governing rulings:** no production runtime dependency; repository-base-path-safe routes.
- **Authority (ROUTE):** See: [CONTRACTS.md](../CONTRACTS.md).

## 4. Topology (topology sub-type)

- **Artifact classes:** test evidence, static page inventory, and link/asset scan results.
- **Canonical path resolver:** results are repository-relative and tests live under `tests/`; no absolute machine path is an artifact identity.
- **Authority (ROUTE):** See: [TOPOLOGY.md](../TOPOLOGY.md) and [structure standard](../../structure/README.md).

## 5. Write-discipline (write-discipline sub-type)

- **Rehearse:** run the test command and inspect its output before staging.
- **Reconcile:** compare results to the contract and topology authorities.
- **Commit:** commit only after required checks pass.
- **Independent verify:** re-run tests and read back the committed tree and remote SHA.
- **Authority (ROUTE):** See: [WRITE-DISCIPLINE.md](../WRITE-DISCIPLINE.md) and [Git standard](../../git.md).

## 6. Related surfaces

See [GITHUB-PAGES-PUBLICATION.md](./GITHUB-PAGES-PUBLICATION.md).

## 7. Change history

2026-07-22 — Initial Phase 6 contract; implementation deferred to Phase 7.
