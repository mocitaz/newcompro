import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const footer = await readFile(
  new URL('../src/components/Footer.astro', import.meta.url),
  'utf8',
);

test('footer links to Teknalogi social profiles', () => {
  assert.match(footer, /href="https:\/\/instagram\.com\/teknalogi\.id"/);
  assert.match(footer, /href="https:\/\/www\.linkedin\.com\/company\/teknalogi\/"/);
});

test('footer social icons are accessible and inherit neutral text color', () => {
  assert.match(footer, /aria-label="Instagram Teknalogi"/);
  assert.match(footer, /aria-label="LinkedIn Teknalogi"/);
  assert.match(footer, /flex items-center gap-4 pt-1/);
  assert.match(footer, /inline-flex h-5 w-5 items-center justify-center/);
  assert.match(footer, /text-slate-400 transition-colors hover:text-white/);
  assert.doesNotMatch(footer, /(?:text|bg)-(?:pink|fuchsia|blue|sky)-/);
});
