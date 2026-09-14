import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { translations } from '../src/i18n/translations.ts';

const cwd = process.cwd();

const expectedIndustries = [
  'banking',
  'tech-saas',
  'manufacturing',
  'healthcare',
  'business-services',
  'insurance',
  'education',
  'telecom',
  'retail',
  'logistics',
];

test('all 10 industries exist with dedicated routes in translations', () => {
  const enItems = translations.en.nav.industriesMega.items;
  const idItems = translations.id.nav.industriesMega.items;

  assert.equal(enItems.length, 10, 'EN must have 10 industries');
  assert.equal(idItems.length, 10, 'ID must have 10 industries');

  expectedIndustries.forEach((slug, idx) => {
    assert.equal(enItems[idx].id, slug);
    assert.equal(enItems[idx].href, `/industries/${slug}`);
    assert.ok(enItems[idx].title);
    assert.ok(enItems[idx].desc);

    assert.equal(idItems[idx].id, slug);
    assert.equal(idItems[idx].href, `/id/industri/${slug}`);
    assert.ok(idItems[idx].title);
    assert.ok(idItems[idx].desc);
  });
});

test('translations for industries have zero em dashes per antislop rules', () => {
  const json = JSON.stringify({
    en: translations.en.nav.industriesMega,
    id: translations.id.nav.industriesMega,
  });
  assert.ok(!json.includes('—'), 'Must not contain em dashes (—)');
});

test('industry routes and components exist and render cleanly', () => {
  const enRoutePath = path.join(cwd, 'src/pages/industries/[industry].astro');
  const idRoutePath = path.join(cwd, 'src/pages/id/industri/[industry].astro');
  const enAliasPath = path.join(cwd, 'src/pages/industri/[industry].astro');
  const idAliasPath = path.join(cwd, 'src/pages/id/industries/[industry].astro');
  const componentPath = path.join(cwd, 'src/components/IndustryComingSoon.astro');

  assert.ok(fs.existsSync(enRoutePath), 'EN route file must exist');
  assert.ok(fs.existsSync(idRoutePath), 'ID route file must exist');
  assert.ok(fs.existsSync(enAliasPath), 'EN alias route file must exist');
  assert.ok(fs.existsSync(idAliasPath), 'ID alias route file must exist');
  assert.ok(fs.existsSync(componentPath), 'IndustryComingSoon component must exist');

  const componentContent = fs.readFileSync(componentPath, 'utf8');
  assert.ok(componentContent.includes('animasi_segera hadir.png'), 'Must render raw illustration');
  assert.ok(componentContent.includes('PT Teknalogi Transformasi Digital'), 'Must render PT Teknalogi Transformasi Digital');
  assert.ok(!componentContent.includes('—'), 'Component must have zero em dashes');

  const enRouteContent = fs.readFileSync(enRoutePath, 'utf8');
  assert.ok(enRouteContent.includes('IndustryComingSoon'), 'Must include IndustryComingSoon');
  assert.ok(enRouteContent.includes('LetsTalk'), 'Must include LetsTalk');

  const idRouteContent = fs.readFileSync(idRoutePath, 'utf8');
  assert.ok(idRouteContent.includes('IndustryComingSoon'), 'Must include IndustryComingSoon');
  assert.ok(idRouteContent.includes('LetsTalk'), 'Must include LetsTalk');
});

test('physical animation asset exists in public folder in png and webp', () => {
  const pngPath = path.join(cwd, 'public/animasi_segera hadir.png');
  const webpPath = path.join(cwd, 'public/animasi_segera_hadir.webp');

  assert.ok(fs.existsSync(pngPath), 'public/animasi_segera hadir.png must exist');
  assert.ok(fs.existsSync(webpPath), 'public/animasi_segera_hadir.webp must exist');
  assert.ok(fs.statSync(pngPath).size > 0);
  assert.ok(fs.statSync(webpPath).size > 0);
});
