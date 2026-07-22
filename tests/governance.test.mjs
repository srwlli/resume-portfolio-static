import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (relative) => readFileSync(join(root, relative), 'utf8');

test('package declares a dependency-free static project and test commands', () => {
  const packageJson = JSON.parse(read('package.json'));
  assert.equal(packageJson.type, 'module');
  assert.equal(packageJson.private, true);
  assert.equal(packageJson.dependencies, undefined);
  assert.match(packageJson.scripts.test, /node --test tests\/\*\.test\.mjs/);
  assert.match(packageJson.scripts.preview, /scripts\/preview\.mjs/);
});

test('testing standard is project-specific and complete', () => {
  const estate = read('docs/standards/testing/TEST-ESTATE.md');
  assert.match(estate, /Resume Portfolio Static Test Estate/);
  assert.doesNotMatch(estate, /\{FILL:|\{PROJECT\}/);
  for (const section of ['Test homes', 'Runner', 'Gates', 'Determinism', 'Regression', 'Reference corpus']) {
    assert.match(estate, new RegExp(section));
  }
});

test('development preview helper exists without becoming a production entrypoint', () => {
  assert.equal(existsSync(join(root, 'scripts', 'preview.mjs')), true);
  assert.match(read('scripts/preview.mjs'), /createServer/);
  assert.doesNotMatch(read('scripts/preview.mjs'), /express|fastify|database/i);
});
