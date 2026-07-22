#!/usr/bin/env node

import { spawnSync } from "node:child_process";

function git(args) {
  const result = spawnSync("git", args, {
    cwd: process.cwd(),
    encoding: "utf8",
  });

  return {
    ok: result.status === 0,
    stdout: (result.stdout || "").trim(),
    stderr: (result.stderr || "").trim(),
  };
}

function fail(message, code = 1) {
  console.error(`[commit-location] REFUSED: ${message}`);
  process.exit(code);
}

const staged = git(["diff", "--cached", "--name-only"]);
if (!staged.ok) {
  fail(`cannot inspect staged paths: ${staged.stderr}`, 2);
}

if (!staged.stdout) {
  process.exit(0);
}

let branch = git(["symbolic-ref", "--quiet", "--short", "HEAD"]);
if (!branch.ok) {
  const detached = git(["rev-parse", "--verify", "HEAD"]);
  if (detached.ok) {
    fail("HEAD is detached; switch to main before committing.");
  }
  fail(`cannot resolve the current branch: ${branch.stderr}`, 2);
}

if (branch.stdout === "main" || branch.stdout === "master") {
  process.exit(0);
}

console.warn(
  `[commit-location] WARN: committing on '${branch.stdout}', not main. ` +
    "The repository uses a main-only workflow."
);
