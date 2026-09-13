import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const enPage = readFileSync(
  new URL('../src/pages/services/software-development.astro', import.meta.url),
  'utf8',
);

const idPage = readFileSync(
  new URL('../src/pages/id/layanan/software-development.astro', import.meta.url),
  'utf8',
);

const heroComponent = readFileSync(
  new URL('../src/components/services/SoftwareDevHero.astro', import.meta.url),
  'utf8',
);

const featuresComponent = readFileSync(
  new URL('../src/components/services/SoftwareDevFeatures.astro', import.meta.url),
  'utf8',
);

const aboutServiceComponent = readFileSync(
  new URL('../src/components/services/SoftwareDevAboutService.astro', import.meta.url),
  'utf8',
);

const faqComponent = readFileSync(
  new URL('../src/components/services/SoftwareDevFaq.astro', import.meta.url),
  'utf8',
);

const translations = readFileSync(
  new URL('../src/i18n/translations.ts', import.meta.url),
  'utf8',
);

const layoutComponent = readFileSync(
  new URL('../src/layouts/Layout.astro', import.meta.url),
  'utf8',
);

test('software development pages include hero, features, about-service editorial, faq, and single footer via layout', () => {
  assert.match(enPage, /<SoftwareDevHero/);
  assert.match(enPage, /<SoftwareDevFeatures/);
  assert.match(enPage, /<SoftwareDevAboutService/);
  assert.match(enPage, /<SoftwareDevFaq/);
  assert.match(enPage, /<LetsTalk/);
  assert.match(enPage, /<BackToTop/);
  assert.doesNotMatch(enPage, /<Footer/);

  assert.match(idPage, /<SoftwareDevHero/);
  assert.match(idPage, /<SoftwareDevFeatures/);
  assert.match(idPage, /<SoftwareDevAboutService/);
  assert.match(idPage, /<SoftwareDevFaq/);
  assert.match(idPage, /<LetsTalk/);
  assert.match(idPage, /<BackToTop/);
  assert.doesNotMatch(idPage, /<Footer/);

  // Footer is provided globally by Layout.astro to prevent duplication
  assert.match(layoutComponent, /<Footer\s+lang={lang}\s*\/>/);
});

test('software dev about-service component reproduces editorial layout with sticky table of contents', () => {
  // Main title and section ID
  assert.match(aboutServiceComponent, /id="about-service"/);
  assert.match(aboutServiceComponent, /aboutService\.title/);

  // Table of Contents sidebar
  assert.match(aboutServiceComponent, /TABLE OF CONTENTS|aboutService\.tocTitle/);
  assert.match(aboutServiceComponent, /sticky top-28/);
  assert.match(aboutServiceComponent, /border-l border-slate-200/);

  // Active scrollspy observer
  assert.match(aboutServiceComponent, /IntersectionObserver/);
  assert.match(aboutServiceComponent, /editorial-section/);
});

test('software dev hero component reproduces reference design elements with 3D medallion', () => {
  // Frosted glass card
  assert.match(heroComponent, /backdrop-blur/);
  assert.match(heroComponent, /rounded-\[24px\]|rounded-\[36px\]/);
  assert.match(heroComponent, /shadow-\[0_20px_60px/);

  // Breadcrumb navigation
  assert.match(heroComponent, /aria-label="Breadcrumb"/);

  // 3D Medallion artwork
  assert.match(heroComponent, /software_dev_hero_medallion\.webp/);

  // Quick jump links with diagonal arrows
  assert.match(heroComponent, /data\.quickLinks\.links\.map/);
  assert.match(heroComponent, /M7 17L17 7M17 7H7M17 7V17/);

  // Partner logos matching Faq.astro on main page
  assert.match(heroComponent, /partnerLogos\.map/);
  assert.match(heroComponent, /\/partners\/anytime\.png/);
  assert.match(heroComponent, /\/partners\/kelolaaja\.png/);
});

test('software dev features component reproduces 3-column compact editorial card layout', () => {
  // 3-column grid
  assert.match(featuresComponent, /grid-cols-1 md:grid-cols-2 lg:grid-cols-3/);

  // Compact card frame matching about us cards
  assert.match(featuresComponent, /feature-card/);
  assert.match(featuresComponent, /rounded-\[20px\]/);

  // Icons for features
  assert.match(featuresComponent, /item\.icon === 'business'/);
  assert.match(featuresComponent, /item\.icon === 'shield'/);
  assert.match(featuresComponent, /item\.icon === 'support'/);
  assert.match(featuresComponent, /item\.icon === 'scale'/);
  assert.match(featuresComponent, /item\.icon === 'lock'/);
  assert.match(featuresComponent, /item\.icon === 'workflow'/);
  assert.match(featuresComponent, /item\.icon === 'integration'/);
  assert.match(featuresComponent, /item\.icon === 'code'/);
  assert.match(featuresComponent, /item\.icon === 'module'/);

  // Ambient glow
  assert.match(featuresComponent, /radial-gradient/);
});

test('software dev faq component matches homepage faq layout with radial gradient accordion', () => {
  // Two-column layout with sticky sidebar
  assert.match(faqComponent, /grid-cols-1 lg:grid-cols-12/);
  assert.match(faqComponent, /lg:sticky lg:top-28/);

  // Trust badges with partner logos
  assert.match(faqComponent, /partnerLogos\.map/);

  // Accordion
  assert.match(faqComponent, /softwaredev-faq-accordion/);
  assert.match(faqComponent, /faq-icon-minus/);
  assert.match(faqComponent, /faq-icon-plus/);
});

test('translations for software development follow antislop rules with zero em dashes', () => {
  // Extract softwareDevService translation section
  const enIndex = translations.indexOf('softwareDevService: {');
  assert.ok(enIndex > 0, 'softwareDevService must exist in translations');
  
  // Verify no forbidden em dashes in softwareDevService
  const softwareDevSlice = translations.slice(enIndex);
  assert.doesNotMatch(softwareDevSlice, /—/, 'Antislop R-02 violation: em dash found in softwareDevService');
});
