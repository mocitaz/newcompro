import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { translations } from '../src/i18n/translations.ts';

const cwd = process.cwd();

test('case studies page data exists in both en and id translations', () => {
  assert.ok(translations.en.caseStudiesPage, 'English caseStudiesPage data must exist');
  assert.ok(translations.id.caseStudiesPage, 'Indonesian caseStudiesPage data must exist');

  // Verify meta
  assert.ok(translations.en.caseStudiesPage.meta.title.includes('Case Studies'));
  assert.ok(translations.id.caseStudiesPage.meta.title.includes('Case Studies'));

  // Verify hero copy matches user reference and is concise
  assert.equal(translations.id.caseStudiesPage.hero.title, 'Hasil nyata. Transformasi nyata.');
  assert.equal(translations.en.caseStudiesPage.hero.title, 'Real results. Real transformation.');
  assert.ok(translations.id.caseStudiesPage.hero.subtitle.includes('Teknalogi'));
  assert.ok(translations.en.caseStudiesPage.hero.subtitle.includes('Teknalogi'));
  assert.ok(translations.id.caseStudiesPage.hero.subtitle.length < 150, 'Indonesian subtitle should be concise');
});

test('case studies 4 content items are properly configured with /segera_hadir.png image', () => {
  const enItems = translations.en.caseStudiesPage.items;
  const idItems = translations.id.caseStudiesPage.items;

  assert.equal(enItems.length, 4, 'Must have exactly 4 items in EN');
  assert.equal(idItems.length, 4, 'Must have exactly 4 items in ID');

  const expectedTitles = [
    'KelolaAja - CMS-Powered Product Experience',
    'PT Nikawa Teknika Indonesia - Corporate Digital Presence',
    'Anytime Fitness - Digital Fitness Management Platform',
    'Enterprise Operations Platform'
  ];

  enItems.forEach((item, index) => {
    assert.equal(item.title, expectedTitles[index]);
    assert.equal(item.image, '/segera_hadir.png', 'Must point to /segera_hadir.png as requested by user');
    assert.equal(item.webp, '/segera_hadir.webp', 'Must have webp companion for segera_hadir.webp');
    assert.ok(item.category, 'Must have category');
    assert.ok(item.industry, 'Must have industry label');
  });

  idItems.forEach((item, index) => {
    assert.equal(item.title, expectedTitles[index]);
    assert.equal(item.image, '/segera_hadir.png', 'Must point to /segera_hadir.png as requested by user');
    assert.equal(item.webp, '/segera_hadir.webp', 'Must have webp companion for segera_hadir.webp');
    assert.ok(item.category, 'Must have category');
    assert.ok(item.industry, 'Must have industry label');
  });

  // Verify physical asset exists in public folder
  const segeraPngPath = path.join(cwd, 'public/segera_hadir.png');
  const segeraWebpPath = path.join(cwd, 'public/segera_hadir.webp');
  assert.ok(fs.existsSync(segeraPngPath), 'public/segera_hadir.png must physically exist');
  assert.ok(fs.existsSync(segeraWebpPath), 'public/segera_hadir.webp must physically exist');
});

test('translations for case studies follow antislop rules with zero em dashes', () => {
  const enJson = JSON.stringify(translations.en.caseStudiesPage);
  const idJson = JSON.stringify(translations.id.caseStudiesPage);

  assert.ok(!enJson.includes('—'), 'English caseStudiesPage must not contain em dash (—)');
  assert.ok(!idJson.includes('—'), 'Indonesian caseStudiesPage must not contain em dash (—)');
});

test('CaseStudiesGrid component exists with ambient aura and clean 2-column layout without filter pills', () => {
  const gridPath = path.join(cwd, 'src/components/CaseStudiesGrid.astro');
  assert.ok(fs.existsSync(gridPath), 'CaseStudiesGrid.astro must exist');

  const gridContent = fs.readFileSync(gridPath, 'utf8');
  assert.ok(gridContent.includes('ambient_sphere') || gridContent.includes('from-emerald-300'), 'Must include ambient emerald/mint aura');
  assert.ok(!gridContent.includes('case-study-filter-btn'), 'Filter pills should be removed as requested');
  assert.ok(!gridContent.includes('initCaseStudyFilters'), 'Filter script should be removed as requested');
  assert.ok(gridContent.includes('grid-cols-1 md:grid-cols-2'), 'Must use 2-col desktop, 1-col mobile grid');
});

test('case study page routes exist and cleanly render CaseStudiesGrid, LetsTalk, and BackToTop', () => {
  const routes = [
    'src/pages/case-study.astro',
    'src/pages/id/case-study.astro',
    'src/pages/portofolio.astro',
    'src/pages/id/portofolio.astro',
    'src/pages/portfolio.astro',
    'src/pages/id/portfolio.astro'
  ];

  routes.forEach((route) => {
    const fullPath = path.join(cwd, route);
    assert.ok(fs.existsSync(fullPath), `${route} must exist`);
  });

  const enCaseStudy = fs.readFileSync(path.join(cwd, 'src/pages/case-study.astro'), 'utf8');
  assert.ok(enCaseStudy.includes('CaseStudiesGrid'));
  assert.ok(!enCaseStudy.includes('CaseStudiesBlueprint'), 'Blueprint section should be removed as requested');
  assert.ok(enCaseStudy.includes('LetsTalk'));
  assert.ok(enCaseStudy.includes('BackToTop'));

  const idCaseStudy = fs.readFileSync(path.join(cwd, 'src/pages/id/case-study.astro'), 'utf8');
  assert.ok(idCaseStudy.includes('CaseStudiesGrid'));
  assert.ok(!idCaseStudy.includes('CaseStudiesBlueprint'), 'Blueprint section should be removed as requested');
  assert.ok(idCaseStudy.includes('LetsTalk'));
  assert.ok(idCaseStudy.includes('BackToTop'));
});

test('topbar recognizes case-study routes and handles language toggle', () => {
  const topbarPath = path.join(cwd, 'src/components/TopBar.astro');
  const topbarContent = fs.readFileSync(topbarPath, 'utf8');

  assert.ok(topbarContent.includes("currentPath.includes('/case-study')"), 'TopBar must recognize case-study paths');
  assert.ok(topbarContent.includes("idUrl = '/id/case-study'"), 'TopBar must toggle to /id/case-study');
  assert.ok(topbarContent.includes("enUrl = '/case-study'"), 'TopBar must toggle to /case-study');
});
