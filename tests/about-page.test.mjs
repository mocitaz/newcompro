import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');
const about = read('../src/pages/about.astro');
const aboutId = read('../src/pages/id/tentang-kami.astro');
const foundation = read('../src/components/AboutFoundation.astro');
const brandValues = read('../src/components/BrandValues.astro');
const layout = read('../src/layouts/Layout.astro');

test('about pages share a bilingual editorial foundation', () => {
  assert.match(about, /<AboutFoundation lang="en"/);
  assert.match(aboutId, /<AboutFoundation lang="id"/);
  assert.match(foundation, /Building Digital Ecosystems for Sustainable Business Growth/);
  assert.match(foundation, /Membangun Ekosistem Digital untuk Pertumbuhan Bisnis yang Berkelanjutan/);
  assert.match(foundation, /grid grid-cols-1 gap-9 lg:grid-cols-12/);
});

test('about foundation uses the light editorial gallery composition', () => {
  assert.match(foundation, /about-architecture-v1\.png/);
  assert.match(foundation, /about-office-v1\.png/);
  assert.match(foundation, /about-stat-value/);
  assert.match(foundation, /about-vision/);
  assert.match(foundation, /about-intro/);
  assert.match(foundation, /about-vision/);
});

test('about gallery uses three equal visual frames directly below the introduction', () => {
  const galleryItems = foundation.match(/about-gallery-item/g) ?? [];

  assert.equal(galleryItems.length, 3);
  assert.match(foundation, /about-office-v2\.png/);
  assert.doesNotMatch(foundation, /about-gallery-detail/);
  assert.doesNotMatch(foundation, /lg:row-span-2/);
});

test('about pages include the requested follow-up sections and shared footer', () => {
  for (const page of [about, aboutId]) {
    assert.match(page, /<Faq lang=/);
    assert.match(page, /<LetsTalk lang=/);
  }

  assert.match(layout, /<Footer lang=\{lang\} \/>/);
});

test('about pages introduce the four RISE brand values before the FAQ', () => {
  for (const page of [about, aboutId]) {
    assert.match(page, /<BrandValues lang=/);
  }

  assert.match(brandValues, /Resilient/);
  assert.match(brandValues, /Innovative/);
  assert.match(brandValues, /Synergy/);
  assert.match(brandValues, /Excellence/);
});

test('about pages include engagement models section', () => {
  for (const page of [about, aboutId]) {
    assert.match(page, /<EngagementModels lang=/);
  }
  const models = read('../src/components/EngagementModels.astro');
  assert.match(models, /Dedicated Engineering Squad/);
  assert.match(models, /Core Platform Modernization/);
  assert.match(models, /Technical Advisory/);
});

