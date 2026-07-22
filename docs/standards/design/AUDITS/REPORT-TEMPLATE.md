---
title: Design Audit — 2026-07-22
status: historical
updated: 2026-07-22
kind: ui-design
kind_version: 1.0.0
template_version: 1.0.0
project: resume-portfolio-static
---
<!-- Authored by /standards-establish from SKILLS/STANDARDS/kinds/ui-design/template/AUDITS/REPORT-TEMPLATE.md.
     This is the PROJECT's standard for the "ui-design" kind. Edit to fit the project;
     re-run /standards-update when the ecosystem template evolves. -->


<!--
  DATED AUDIT REPORT — this is a RECORD, not a living doc.
  status: historical (each run produces a new dated file; never edit a prior one).
  Copy this template to AUDITS/2026-07-22-audit.md per the audit-procedure.
-->

# Design Audit — 2026-07-22

**Files scanned:** {N}
**Violations found:** {N}
**Compliant components:** {N}
**Checker verdict:** {PASS | WARNING | FAIL} (`ui-design/check.mjs`)

## Audit scope
{list surfaces scanned, per audit-procedure.md}

## Step 1: Hardcoded colors

| File | Line | Type | Severity | Fix |
|---|---|---|---|---|
| {path} | {N} | hex-color `{#...}` | [CRITICAL] critical | {semantic token} |

## Step 2: Hardcoded spacing / radii / shadows
{count + classification: sizing-not-styling vs real violations}

| Category | Count | Classification |
|---|---|---|
| Sizing constraints (`w-[Npx]`) | {N} | sizing-not-styling (legit) |
| Arbitrary radius/shadow/spacing | {N} | violation |

## Step 3: Binding discipline
{result — matches, missing binding, redundant utilities, or architectural note}

## Step 4: Component specs
{coverage: which components have specs, which are missing} — [MINOR] minor / backlog

## Step 5: CORE-PRINCIPLES §7 cross-reference

| Check | State |
|---|---|
| No hardcoded colors | {[CORRECT] / FAIL} |
| Semantic classes OR CSS vars (not mixed) | {…} |
| Binding on styled ancestors | {…} |
| Slot composition | {…} |
| `className` accepted | {…} |
| Tested across palettes/themes/modes | {…} |
| Accessibility baseline | {…} |

## Step 6: Trends
{are violations going up/down? which components keep recurring? carry-overs from last cycle?}

## Migration actions taken (if any)

| File | Before | After | Rationale |
|---|---|---|---|
| {path} | `{bg-[#...]}` | `{bg-token}` | {…} |

## Verdict
{[CORRECT] PASS / [WARN] WARN / [WRONG] FAIL} — {one-line summary of the cycle}

