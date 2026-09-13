import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const enPage = readFileSync(
  new URL('../src/pages/services/website-development.astro', import.meta.url),
  'utf8',
);

const idPage = readFileSync(
  new URL('../src/pages/id/layanan/website-development.astro', import.meta.url),
  'utf8',
);

const heroComponent = readFileSync(
  new URL('../src/components/services/WebDevHero.astro', import.meta.url),
  'utf8',
);

const featuresComponent = readFileSync(
  new URL('../src/components/services/WebDevFeatures.astro', import.meta.url),
  'utf8',
);

const aboutServiceComponent = readFileSync(
  new URL('../src/components/services/WebDevAboutService.astro', import.meta.url),
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

test('website development pages include hero, features, about-service editorial, faq, and single footer via layout', () => {
  assert.match(enPage, /<WebDevHero/);
  assert.match(enPage, /<WebDevFeatures/);
  assert.match(enPage, /<WebDevAboutService/);
  assert.match(enPage, /<WebDevFaq/);
  assert.match(enPage, /<LetsTalk/);
  assert.match(enPage, /<BackToTop/);
  assert.doesNotMatch(enPage, /<Footer/);

  assert.match(idPage, /<WebDevHero/);
  assert.match(idPage, /<WebDevFeatures/);
  assert.match(idPage, /<WebDevAboutService/);
  assert.match(idPage, /<WebDevFaq/);
  assert.match(idPage, /<LetsTalk/);
  assert.match(idPage, /<BackToTop/);
  assert.doesNotMatch(idPage, /<Footer/);

  // Footer is provided globally by Layout.astro to prevent duplication
  assert.match(layoutComponent, /<Footer\s+lang={lang}\s*\/>/);
});

test('about-service component reproduces editorial layout with sticky table of contents', () => {
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

test('hero component reproduces reference design elements', () => {
  // Frosted glass card
  assert.match(heroComponent, /backdrop-blur/);
  assert.match(heroComponent, /rounded-\[28px\]|rounded-\[36px\]/);
  assert.match(heroComponent, /shadow-\[0_20px_60px/);

  // Breadcrumb navigation
  assert.match(heroComponent, /aria-label="Breadcrumb"/);

  // 3D Sphere artwork
  assert.match(heroComponent, /web_dev_hero_sphere\.webp/);

  // Quick jump links with diagonal arrows
  assert.match(heroComponent, /data\.quickLinks\.links\.map/);
  assert.match(heroComponent, /M7 17L17 7M17 7H7M17 7V17/);

  // Partner logos matching Faq.astro on main page
  assert.match(heroComponent, /partnerLogos\.map/);
  assert.match(heroComponent, /\/partners\/anytime\.png/);
  assert.match(heroComponent, /\/partners\/kelolaaja\.png/);
});

test('features component reproduces 3-column compact editorial card layout', () => {
  // 3-column grid
  assert.match(featuresComponent, /grid-cols-1 md:grid-cols-2 lg:grid-cols-3/);

  // Compact card frame matching about us cards
  assert.match(featuresComponent, /feature-card/);
  assert.match(featuresComponent, /rounded-\[20px\]/);

  // Icons for features
  assert.match(featuresComponent, /item\.icon === 'cube'/);
  assert.match(featuresComponent, /item\.icon === 'search'/);
  assert.match(featuresComponent, /item\.icon === 'hierarchy'/);
  assert.match(featuresComponent, /item\.icon === 'cms'/);

  // Aurora ambient glow
  assert.match(featuresComponent, /radial-gradient/);
});

test('webdev faq component matches homepage faq layout with radial gradient accordion', () => {
  const faqComponent = readFileSync(
    new URL('../src/components/services/WebDevFaq.astro', import.meta.url),
    'utf8',
  );

  // Two-column layout with sticky sidebar
  assert.match(faqComponent, /grid-cols-1 lg:grid-cols-12/);
  assert.match(faqComponent, /lg:sticky lg:top-28/);

  // Trust badges with partner logos
  assert.match(faqComponent, /partnerLogos\.map/);

  // Accordion with blue radial-gradient active state
  assert.match(faqComponent, /faq-accordion/);
  assert.match(faqComponent, /radial-gradient\(ellipse_at_top_left,rgba\(37,99,235/);
  assert.match(faqComponent, /faq-icon-minus/);
  assert.match(faqComponent, /faq-icon-plus/);
});

test('translations for web development follow antislop rules with zero em dashes', () => {
  // Extract webDevService translation section
  const enIndex = translations.indexOf('webDevService: {');
  assert.ok(enIndex > 0, 'webDevService must exist in translations');
  
  // Verify no forbidden em dashes in webDevService
  const webDevSlice = translations.slice(enIndex);
  assert.doesNotMatch(webDevSlice, /—/, 'Antislop R-02 violation: em dash found in webDevService');
});
