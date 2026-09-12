import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const industries = readFileSync(
  new URL('../src/components/Industries.astro', import.meta.url),
  'utf8',
);

test('industry imagery shares the about-page editorial treatment', () => {
  assert.match(industries, /aspect-\[4\/3\] overflow-hidden rounded-\[18px\]/);
  assert.match(industries, /grayscale\(100%\) brightness\(1\.12\) contrast\(0\.82\)/);
  assert.match(industries, /transform: scale\(1\.02\)/);
  assert.doesNotMatch(industries, /border border-slate-800/);
  assert.doesNotMatch(industries, /bg-gradient-to-t/);
});
