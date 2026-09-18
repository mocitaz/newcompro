import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import test from 'node:test';

const enPage = readFileSync(
  new URL('../src/pages/services/mobile-app-development.astro', import.meta.url),
  'utf8',
);

const idPage = readFileSync(
  new URL('../src/pages/id/layanan/mobile-app-development.astro', import.meta.url),
  'utf8',
);

const enAliasPage = readFileSync(
  new URL('../src/pages/layanan/mobile-app-development.astro', import.meta.url),
  'utf8',
);

const idAliasPage = readFileSync(
  new URL('../src/pages/id/services/mobile-app-development.astro', import.meta.url),
  'utf8',
);

const heroComponent = readFileSync(
  new URL('../src/components/services/MobileDevHero.astro', import.meta.url),
  'utf8',
);

const featuresComponent = readFileSync(
  new URL('../src/components/services/MobileDevFeatures.astro', import.meta.url),
  'utf8',
);

const aboutServiceComponent = readFileSync(
  new URL('../src/components/services/MobileDevAboutService.astro', import.meta.url),
  'utf8',
);

const faqComponent = readFileSync(
  new URL('../src/components/services/MobileDevFaq.astro', import.meta.url),
  'utf8',
);

const translations = readFileSync(
  new URL('../src/i18n/translations.ts', import.meta.url),
  'utf8',
);

const topBarComponent = readFileSync(
  new URL('../src/components/TopBar.astro', import.meta.url),
  'utf8',
);

test('mobile development pages and aliases exist and render hero, features, about-service editorial, faq, and single footer via layout', () => {
  assert.match(enPage, /<MobileDevHero/);
  assert.match(enPage, /<MobileDevFeatures/);
  assert.match(enPage, /<MobileDevAboutService/);
  assert.match(enPage, /<MobileDevFaq/);
  assert.match(enPage, /<LetsTalk/);
  assert.match(enPage, /<BackToTop/);
  assert.doesNotMatch(enPage, /<Footer/);

  assert.match(idPage, /<MobileDevHero/);
  assert.match(idPage, /<MobileDevFeatures/);
  assert.match(idPage, /<MobileDevAboutService/);
  assert.match(idPage, /<MobileDevFaq/);
  assert.match(idPage, /<LetsTalk/);
  assert.match(idPage, /<BackToTop/);
  assert.doesNotMatch(idPage, /<Footer/);

  assert.match(enAliasPage, /<MobileDevHero/);
  assert.match(idAliasPage, /<MobileDevHero/);
});

test('mobile dev hero component includes frosted card and 3D architectural disc asset', () => {
  // Frosted glass card
  assert.match(heroComponent, /backdrop-blur/);
  assert.match(heroComponent, /rounded-\[24px\]|rounded-\[36px\]/);
  assert.match(heroComponent, /shadow-\[0_20px_60px/);

  // Breadcrumb navigation
  assert.match(heroComponent, /aria-label="Breadcrumb"/);

  // 3D Architectural disc artwork exists on disk and is referenced
  assert.match(heroComponent, /mobile_dev_hero_disc\.webp/);
  const assetExists = existsSync(new URL('../public/services/mobile_dev_hero_disc.webp', import.meta.url));
  assert.equal(assetExists, true, 'public/services/mobile_dev_hero_disc.webp must exist');

  // Quick jump links with diagonal arrows
  assert.match(heroComponent, /data\.quickLinks\.links\.map/);
  assert.match(heroComponent, /M7 17L17 7M17 7H7M17 7V17/);

  // Partner logos
  assert.match(heroComponent, /partnerLogos\.map/);
  assert.match(heroComponent, /\/partners\/anytime\.(?:webp|png)/);
});

test('mobile dev features component reproduces 3-column compact editorial card layout with all 9 capabilities', () => {
  // 3-column grid
  assert.match(featuresComponent, /grid-cols-1 md:grid-cols-2 lg:grid-cols-3/);

  // Compact card frame matching about us cards
  assert.match(featuresComponent, /feature-card/);
  assert.match(featuresComponent, /rounded-\[20px\]/);

  // Icons for mobile features
  assert.match(featuresComponent, /item\.icon === 'user-centric'/);
  assert.match(featuresComponent, /item\.icon === 'shield'/);
  assert.match(featuresComponent, /item\.icon === 'performance'/);
  assert.match(featuresComponent, /item\.icon === 'cross-platform'/);
  assert.match(featuresComponent, /item\.icon === 'api'/);
  assert.match(featuresComponent, /item\.icon === 'qa'/);
  assert.match(featuresComponent, /item\.icon === 'architecture'/);
  assert.match(featuresComponent, /item\.icon === 'scale'/);
  assert.match(featuresComponent, /item\.icon === 'maintenance'/);

  // Ambient glow
  assert.match(featuresComponent, /radial-gradient/);
});

test('mobile dev about-service component reproduces editorial layout with sticky and mobile table of contents', () => {
  // Main title and section ID
  assert.match(aboutServiceComponent, /id="about-service"/);
  assert.match(aboutServiceComponent, /aboutService\.title/);

  // Table of Contents
  assert.match(aboutServiceComponent, /TABLE OF CONTENTS|aboutService\.tocTitle/);
  assert.match(aboutServiceComponent, /sticky top-28/);
  assert.match(aboutServiceComponent, /border-l border-slate-200/);

  // Active scrollspy observer
  assert.match(aboutServiceComponent, /IntersectionObserver/);
  assert.match(aboutServiceComponent, /editorial-section/);
});

test('mobile dev faq component matches homepage faq layout with radial gradient accordion and partner trust badges', () => {
  // Two-column layout with sticky sidebar
  assert.match(faqComponent, /grid-cols-1 lg:grid-cols-12/);
  assert.match(faqComponent, /lg:sticky lg:top-28/);

  // Trust badges with partner logos
  assert.match(faqComponent, /partnerLogos\.map/);

  // Accordion
  assert.match(faqComponent, /mobiledev-faq-accordion/);
  assert.match(faqComponent, /faq-icon-minus/);
  assert.match(faqComponent, /faq-icon-plus/);
});

test('topbar includes mobile-app-development in language toggle routes and mega menu', () => {
  assert.match(topBarComponent, /isMobileDev/);
  assert.match(topBarComponent, /\/id\/layanan\/mobile-app-development/);
  assert.match(topBarComponent, /\/services\/mobile-app-development/);
});

test('translations for mobile development follow antislop rules with zero em dashes', () => {
  const enIndex = translations.indexOf('mobileDevService: {');
  assert.ok(enIndex > 0, 'mobileDevService must exist in EN translations');

  const idIndex = translations.indexOf('mobileDevService: {', enIndex + 1);
  assert.ok(idIndex > 0, 'mobileDevService must exist in ID translations');

  assert.doesNotMatch(translations, /—/, 'Antislop R-02 violation: em dash found anywhere in translations.ts');
});
