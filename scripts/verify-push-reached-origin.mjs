#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import path from "node:path";

const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const match = arg.match(/^--([^=]+)=(.+)$/);
    return match ? [match[1], match[2]] : [arg.replace(/^--/, ""), true];
  })
);

const repo = path.resolve(String(args.repo || process.cwd()));
const remote = String(args.remote || "origin");

function git(commandArgs) {
  return spawnSync("git", commandArgs, {
    cwd: repo,
    encoding: "utf8",
  });
}

function output(commandArgs) {
  const result = git(commandArgs);
  return result.status === 0 ? (result.stdout || "").trim() : null;
}

function fail(message, code = 1) {
  console.error(`[push-verify] FAIL: ${message}`);
  process.exit(code);
}

if (!output(["rev-parse", "--git-dir"])) {
  fail(`${repo} is not a Git repository`, 2);
}

const head = output(["rev-parse", "HEAD"]);
const branch = String(
  args.branch || output(["symbolic-ref", "--quiet", "--short", "HEAD"]) || ""
);

if (!head) fail("cannot resolve local HEAD", 2);
if (!branch) fail("HEAD is detached; a durable push must be on a branch", 2);
if (!output(["remote", "get-url", remote])) {
  fail(`remote '${remote}' is not configured`, 2);
}

const ref = `refs/heads/${branch}`;
const result = git(["ls-remote", "--heads", remote, ref]);
if (result.status !== 0) {
  fail(`cannot query ${remote}/${branch}: ${(result.stderr || "").trim()}`);
}

const remoteHead = ((result.stdout || "").trim().split(/\s+/)[0] || "").trim();
if (remoteHead !== head) {
  fail(
    `${remote}/${branch} is ${remoteHead || "absent"}; local HEAD is ${head}. ` +
      `Run 'git push ${remote} ${branch}' and retry.`
  );
}

console.log(
  `[push-verify] PASS: ${remote}/${branch} holds local HEAD ${head.slice(0, 12)}`
);
