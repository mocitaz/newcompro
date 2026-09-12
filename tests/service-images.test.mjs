import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const projectRoot = new URL('../', import.meta.url);
const translations = readFileSync(
  new URL('src/i18n/translations.ts', projectRoot),
  'utf8',
);

const serviceImages = [
  'web_dev_v2',
  'software_app_v2',
  'seo_ai_v2',
  'maintenance_v2',
];

test('service cards reference the cohesive v2 image series', () => {
  for (const name of serviceImages) {
    assert.match(translations, new RegExp(`/services/${name}\\.webp`));
    assert.match(translations, new RegExp(`/services/${name}\\.jpg`));
  }
});

test('optimized service images and fallbacks exist', () => {
  for (const name of serviceImages) {
    assert.equal(
      existsSync(new URL(`public/services/${name}.webp`, projectRoot)),
      true,
    );
    assert.equal(
      existsSync(new URL(`public/services/${name}.jpg`, projectRoot)),
      true,
    );
  }
});
