---
kind: execution
subtype: write-discipline
title: Static Portfolio Write Discipline
status: living
updated: 2026-07-22
authority: docs/standards/git.md
---

# Write-discipline — Static Validation and Publication

Every governed write follows one loop: rehearse with a dry-run or diff preview; reconcile the proposed files against artifact contracts and canonical topology; commit only after both checks pass; then independently verify by reading back the committed tree and comparing the remote SHA. Local validation refuses publication when guards fail. The Git standard owns commit, push, and remote verification; testing owns validation evidence; documentation owns the decision trail. See: [Git standard](../git.md), [testing standard](../testing/README.md), and [content provenance](../content-provenance.md).
