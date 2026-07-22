---
kind: git
title: Resume Portfolio Static — Git Standard
status: living
updated: 2026-07-22
purpose: Declare this repository's Git enforcement surfaces and durability workflow
audience: Contributors and coding agents working in resume-portfolio-static
---
<!-- Authored by /standards-establish from the git kind, then specialized for
     resume-portfolio-static. The ecosystem authority remains
     STANDARDS/GIT-STANDARD.md v3.0.0 in the CodeRef ASSISTANT repository. -->

# Resume Portfolio Static — Git Standard

This repository inherits CodeRef's ecosystem Git Standard v3.0.0. The local
instance records where that standard is enforced; it does not replace or fork the
ecosystem authority.

## Repository posture

- Work lands on `main`; do not create `wo/*` branches or switch the shared checkout.
- Stage only explicit paths. Never use `git add -A` or `git add .`.
- Partition concurrent work by file so two agents do not edit the same path.
- Work is durable only after `main` is pushed and the remote SHA is independently
  verified.
- Secrets belong in environment variables and must never be committed.

## Required enforcement surfaces

| Surface | Repository path | Contract |
|---|---|---|
| Tracked hooks directory | `.githooks/` | Holds the commit-time gate chain in version control. |
| Commit-location gate | `scripts/check-commit-location.mjs` | Allows `main`, refuses detached HEAD, and warns on other named branches. |
| Hook entry point | `.githooks/pre-commit` | Runs the commit-location gate for every commit. |
| Push-and-verify gate | `scripts/verify-push-reached-origin.mjs` | Compares local HEAD with the live remote branch and fails closed on uncertainty. |

## Clone bootstrap

Every fresh clone must activate the tracked hooks before its first commit:

```bash
git config core.hooksPath .githooks
git config --get core.hooksPath
```

The second command must print `.githooks`.

## Commit and durability workflow

Stage only the paths owned by the current change, commit on `main`, push, and run
the independent remote check:

```bash
git add -- path/to/file another/path
git commit -m "docs(git): describe the change in plain language"
git push origin main
node scripts/verify-push-reached-origin.mjs --strict
```

Within the CodeRef environment, `/git-commit --paths ... --done` is the guarded
equivalent. A phase is not complete unless the verify script exits `0`.

## Conformance

Run the portable Git-kind checker from the CodeRef ASSISTANT repository:

```bash
node C:/Users/willh/Desktop/CODEREF/ASSISTANT/SKILLS/STANDARDS/kinds/git/check.mjs --project-root=. --json
```

All core Git checks must pass. Warning-level checks must either pass or have a
recorded, intentional exception; this repository currently expects a clean PASS.
