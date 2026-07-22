---
title: "Executor Surface Spec: GitHub Pages Publication"
status: living
updated: 2026-07-22
kind: execution
surface: github-pages-publication
---

# Executor Surface Spec: GitHub Pages Publication

## 1. What it is

The GitHub Actions Pages surface will upload the already-validated repository-relative static files and request Pages deployment. It produces no application server, API, database, SSR process, or runtime build service.

## 2. Generation (generation sub-type)

- **Output format:** one deterministic Pages artifact containing the declared static file tree.
- **Reproducible inputs:** the pushed `main` tree, fixed repository base path, and pinned workflow steps.
- **Refuse-to-emit condition:** failed tests, missing routes/assets, placeholders, or unexpected runtime files block artifact creation.
- **Determinism note:** the same commit yields the same artifact file set.
- **Authority (ROUTE):** See: [GENERATION.md](../GENERATION.md) and [content provenance](../../content-provenance.md).

## 3. Contract (contracts sub-type)

- **Authoritative contract:** [CONTRACTS.md](../CONTRACTS.md), [testing standard](../../testing/README.md), and [documentation standard](../../documentation.md).
- **Validate-before-accept:** the exact artifact file list and static test suite pass before upload.
- **Governing rulings:** only static client files are publishable; secrets and server entrypoints are prohibited.
- **Authority (ROUTE):** See: [CONTRACTS.md](../CONTRACTS.md).

## 4. Topology (topology sub-type)

- **Artifact classes:** Pages upload artifact, workflow file, and seven route directories.
- **Canonical path resolver:** workflow is `.github/workflows/pages.yml`; publishable files are the repository-relative site tree; the Pages URL is `/resume-portfolio-static/`.
- **Authority (ROUTE):** See: [TOPOLOGY.md](../TOPOLOGY.md) and [structure standard](../../structure/README.md).

## 5. Write-discipline (write-discipline sub-type)

- **Rehearse:** perform the local artifact file-list and test dry-run before upload.
- **Reconcile:** compare the upload set to the contracts and topology; refuse unexpected files.
- **Commit:** push the validated commit to `main` before deployment.
- **Independent verify:** read the remote SHA, workflow result, live root, and all seven direct page URLs after deployment.
- **Authority (ROUTE):** See: [WRITE-DISCIPLINE.md](../WRITE-DISCIPLINE.md) and [Git standard](../../git.md).

## 6. Related surfaces

See [LOCAL-STATIC-VALIDATION.md](./LOCAL-STATIC-VALIDATION.md).

## 7. Change history

2026-07-22 — Initial Phase 6 contract; workflow implementation deferred to Phase 8.
