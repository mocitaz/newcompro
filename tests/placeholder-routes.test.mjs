import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { translations } from '../src/i18n/translations.ts';

const cwd = process.cwd();

const expectedResources = [
  'workspace',
  'ticketing',
  'lims',
  'trakerja',
  'pixelplay',
];

test('resource routes exist for both EN and ID and render IndustryComingSoon', () => {
  const enRoutePath = path.join(cwd, 'src/pages/resources/[resource].astro');
  const idRoutePath = path.join(cwd, 'src/pages/id/resources/[resource].astro');
  const enAliasPath = path.join(cwd, 'src/pages/products/[resource].astro');
  const idAliasPath = path.join(cwd, 'src/pages/id/products/[resource].astro');

  assert.ok(fs.existsSync(enRoutePath), 'EN resources route file must exist');
  assert.ok(fs.existsSync(idRoutePath), 'ID resources route file must exist');
  assert.ok(fs.existsSync(enAliasPath), 'EN products alias route file must exist');
  assert.ok(fs.existsSync(idAliasPath), 'ID products alias route file must exist');

  const enContent = fs.readFileSync(enRoutePath, 'utf8');
  const idContent = fs.readFileSync(idRoutePath, 'utf8');

  assert.ok(enContent.includes('IndustryComingSoon'), 'EN route must include IndustryComingSoon');
  assert.ok(enContent.includes('LetsTalk'), 'EN route must include LetsTalk');
  assert.ok(idContent.includes('IndustryComingSoon'), 'ID route must include IndustryComingSoon');
  assert.ok(idContent.includes('LetsTalk'), 'ID route must include LetsTalk');
});

test('translations for featured products have dedicated routes and zero em dashes', () => {
  const enFeatured = translations.en.nav.resourcesMega.featured;
  const idFeatured = translations.id.nav.resourcesMega.featured;

  assert.equal(enFeatured.length, 5, 'EN must have 5 featured products');
  assert.equal(idFeatured.length, 5, 'ID must have 5 featured products');

  expectedResources.forEach((slug, idx) => {
    assert.equal(enFeatured[idx].href, `/resources/${slug}`);
    assert.equal(idFeatured[idx].href, `/id/resources/${slug}`);
  });

  const json = JSON.stringify({
    en: translations.en.nav.resourcesMega,
    id: translations.id.nav.resourcesMega,
  });
  assert.ok(!json.includes('—'), 'Translations must not contain em dashes (—)');
});

test('ecosystem, knowledge hub, and industries hub routes exist and render IndustryComingSoon', () => {
  const pages = [
    'src/pages/ecosystem.astro',
    'src/pages/id/ekosistem.astro',
    'src/pages/knowledge-hub.astro',
    'src/pages/id/knowledge-hub.astro',
    'src/pages/industries/index.astro',
    'src/pages/id/industri/index.astro',
    'src/pages/layanan.astro',
    'src/pages/id/layanan.astro',
  ];

  for (const page of pages) {
    const filePath = path.join(cwd, page);
    assert.ok(fs.existsSync(filePath), `${page} must exist`);
    const content = fs.readFileSync(filePath, 'utf8');
    assert.ok(content.includes('IndustryComingSoon'), `${page} must render IndustryComingSoon`);
    assert.ok(content.includes('LetsTalk'), `${page} must render LetsTalk`);
    assert.ok(!content.includes('—'), `${page} must not contain em dashes (—)`);
  }
});

test('topbar navigation correctly references dedicated routes for ecosystem and industries hub', () => {
  const topBarPath = path.join(cwd, 'src/components/TopBar.astro');
  const topBarContent = fs.readFileSync(topBarPath, 'utf8');

  assert.ok(topBarContent.includes('href={ecosystemUrl}'), 'TopBar must link Explore Ecosystem to ecosystemUrl');
  assert.ok(topBarContent.includes('href={industriesHubUrl}'), 'TopBar must link Explore All Industries to industriesHubUrl');
  assert.ok(topBarContent.includes('isResource'), 'TopBar must handle isResource language toggle');
  assert.ok(topBarContent.includes('isEcosystem'), 'TopBar must handle isEcosystem language toggle');
  assert.ok(topBarContent.includes('isKnowledgeHub'), 'TopBar must handle isKnowledgeHub language toggle');
  assert.ok(topBarContent.includes('isIndustriesHub'), 'TopBar must handle isIndustriesHub language toggle');
});
