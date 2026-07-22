---
title: Executor Surface Inventory
status: living
updated: 2026-07-22
kind: execution
kind_version: 1.0.0
template_version: 1.0.0
project: resume-portfolio-static
---
<!-- Authored by /standards-establish from SKILLS/STANDARDS/kinds/execution/template/SURFACES/AUDIT.md.
     This is the PROJECT's standard for the "execution" kind. Edit to fit the project;
     re-run /standards-update when the ecosystem template evolves. -->

<!-- PROVENANCE: rendered from standard-KIND `execution`
     (SKILLS/STANDARDS/kinds/execution/template/SURFACES/AUDIT.md).
     Do not edit the rule shape here; a rule change is a KIND change — edit the
     template and re-sync via /standards-update --kind=execution. Rows ARE project
     content: this file is mutated in-project by the audit cadence. This is a
     rolling-inventory record, NOT a fifth sub-type. -->


# Executor Surface Inventory

**Last updated:** 2026-07-22
**Last audit cycle:** 2026-07-22
**Total executor surfaces in scope:** 2

---

## How this file works

This is the **rolling state document** for the project's executor surface: every
governed surface enumerated with its generation/contracts/topology/write-discipline
coverage. It is the `document` verb's IDENTIFY worklist (see
document-execution-standards.md) and the audit cadence refreshes it. It plays the
same rolling-inventory role `data`'s `ENTITIES/AUDIT.md` plays — it is a bundle
member, **not** a fifth sub-type.

### ENUMERATION RULE (mandatory — no blanket rows)

Every executor surface gets **its own row** below. A blanket classification ("all
other writers implicitly conform") is NOT permitted — it hides the per-surface
coverage state the standard tracks. The row count MUST equal **Total executor
surfaces in scope**. If it doesn't, the inventory is incomplete — finish the
enumeration before calling the audit done.

The four sub-type columns record whether THIS surface's contribution to each
sub-type standard is declared: `Generation` (pinned deterministic generator: format
+ reproducible-inputs + refuse-guard), `Contracts` (authoritative contract +
validate-before-accept), `Topology` (named artifacts + canonical path resolver),
`Write-disc.` (rehearse → reconcile → commit → independent-verify). `Routes?` = each
declared section carries an authority pointer rather than restating the rule
(the DEFINING INVARIANT). `Spec exists?` = a name-matched `SURFACES/<SurfaceName>.md`
is present.

---

## Surfaces

| Executor surface | Generator/writer code | Generation | Contracts | Topology | Write-disc. | Routes? | Spec exists? |
|---|---|---|---|---|---|---|---|
| Local static validation | `npm run test:run` and `tests/` | Yes | Yes | Yes | Yes | Yes | Yes |
| GitHub Pages publication | `.github/workflows/pages.yml` (Phase 8) | Yes | Yes | Yes | Yes | Yes | Yes |

---

## Not Yet Governed

(Executor surfaces observed in the codebase but not yet given a sub-type-complete
standard. They land here first, then move up as their four sub-types are declared
and routed.)

| Executor surface | First seen | Missing sub-type(s) |
|---|---|---|
| {FILL or _(none)_} | | |

---

## Architectural Notes

Both surfaces share repository-relative paths and refuse-to-publish guards. Pages publication remains pending until Phase 8; this inventory defines its contract before implementation.

---

## References

- [../README.md](../README.md) — the executor standard (four sub-types + the ROUTE-not-restate invariant)
- [TEMPLATE.md](./TEMPLATE.md) — the per-surface spec a fully-governed surface must have
