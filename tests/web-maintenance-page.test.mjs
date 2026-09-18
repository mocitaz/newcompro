import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import test from 'node:test';

const enPage = readFileSync(
  new URL('../src/pages/services/web-maintenance.astro', import.meta.url),
  'utf8',
);

const idPage = readFileSync(
  new URL('../src/pages/id/layanan/web-maintenance.astro', import.meta.url),
  'utf8',
);

const enAliasPage = readFileSync(
  new URL('../src/pages/layanan/web-maintenance.astro', import.meta.url),
  'utf8',
);

const idAliasPage = readFileSync(
  new URL('../src/pages/id/services/web-maintenance.astro', import.meta.url),
  'utf8',
);

const heroComponent = readFileSync(
  new URL('../src/components/services/WebMaintenanceHero.astro', import.meta.url),
  'utf8',
);

const featuresComponent = readFileSync(
  new URL('../src/components/services/WebMaintenanceFeatures.astro', import.meta.url),
  'utf8',
);

const aboutServiceComponent = readFileSync(
  new URL('../src/components/services/WebMaintenanceAboutService.astro', import.meta.url),
  'utf8',
);

const faqComponent = readFileSync(
  new URL('../src/components/services/WebMaintenanceFaq.astro', import.meta.url),
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

test('web-maintenance pages and aliases exist and render hero, features, about-service editorial, faq, and single footer via layout', () => {
  assert.match(enPage, /<WebMaintenanceHero/);
  assert.match(enPage, /<WebMaintenanceFeatures/);
  assert.match(enPage, /<WebMaintenanceAboutService/);
  assert.doesNotMatch(enPage, /<WebMaintenanceExploreSolutions/);
  assert.match(enPage, /<WebMaintenanceFaq/);
  assert.match(enPage, /<LetsTalk/);
  assert.match(enPage, /<BackToTop/);
  assert.doesNotMatch(enPage, /<Footer/);

  assert.match(idPage, /<WebMaintenanceHero/);
  assert.match(idPage, /<WebMaintenanceFeatures/);
  assert.match(idPage, /<WebMaintenanceAboutService/);
  assert.doesNotMatch(idPage, /<WebMaintenanceExploreSolutions/);
  assert.match(idPage, /<WebMaintenanceFaq/);
  assert.match(idPage, /<LetsTalk/);
  assert.match(idPage, /<BackToTop/);
  assert.doesNotMatch(idPage, /<Footer/);

  assert.match(enAliasPage, /<WebMaintenanceHero/);
  assert.match(idAliasPage, /<WebMaintenanceHero/);
});

test('web-maintenance hero component includes frosted card and 3D architectural medallion asset', () => {
  // Frosted glass card
  assert.match(heroComponent, /backdrop-blur/);
  assert.match(heroComponent, /rounded-\[24px\]|rounded-\[36px\]/);
  assert.match(heroComponent, /shadow-\[0_20px_60px/);

  // Breadcrumb navigation
  assert.match(heroComponent, /aria-label="Breadcrumb"/);

  // 3D Architectural medallion artwork exists on disk and is referenced
  assert.match(heroComponent, /web_maintenance_hero_disc\.webp/);
  const assetExists = existsSync(new URL('../public/services/web_maintenance_hero_disc.webp', import.meta.url));
  assert.equal(assetExists, true, 'public/services/web_maintenance_hero_disc.webp must exist');

  // Amber CTA pill
  assert.match(heroComponent, /#f5a623/);

  // Quick jump links with diagonal arrows
  assert.match(heroComponent, /data\.quickLinks\.links\.map/);
  assert.match(heroComponent, /M7 17L17 7M17 7H7M17 7V17/);

  // Partner logos
  assert.match(heroComponent, /partnerLogos\.map/);
  assert.match(heroComponent, /\/partners\/anytime\.(?:webp|png)/);
});

test('web-maintenance features component reproduces 3-column compact editorial card layout with all 9 capabilities', () => {
  // 3-column grid
  assert.match(featuresComponent, /grid-cols-1 md:grid-cols-2 lg:grid-cols-3/);

  // Compact card frame matching enterprise standard
  assert.match(featuresComponent, /feature-card/);
  assert.match(featuresComponent, /rounded-\[20px\]/);

  // Icons for Web Maintenance features
  assert.match(featuresComponent, /item\.icon === 'proactive-monitoring'/);
  assert.match(featuresComponent, /item\.icon === 'backup-recovery'/);
  assert.match(featuresComponent, /item\.icon === 'incident-response'/);
  assert.match(featuresComponent, /item\.icon === 'security-patching'/);
  assert.match(featuresComponent, /item\.icon === 'bug-resolution'/);
  assert.match(featuresComponent, /item\.icon === 'continuous-modernization'/);
  assert.match(featuresComponent, /item\.icon === 'performance-optimization'/);
  assert.match(featuresComponent, /item\.icon === 'technical-seo'/);
  assert.match(featuresComponent, /item\.icon === 'software-updates'/);

  // Ambient multi-spectrum aurora glow
  assert.match(featuresComponent, /radial-gradient/);
});

test('web-maintenance about-service component reproduces editorial layout with sticky and mobile table of contents', () => {
  // Main title and section ID
  assert.match(aboutServiceComponent, /id="about-service"/);
  assert.match(aboutServiceComponent, /aboutService\.title/);

  // Table of Contents
  assert.match(aboutServiceComponent, /aboutService\.tocTitle/);
  assert.match(aboutServiceComponent, /sticky top-28/);
  assert.match(aboutServiceComponent, /border-l border-slate-200/);

  // Active scrollspy observer
  assert.match(aboutServiceComponent, /IntersectionObserver/);
  // Pure editorial flow (no separate card container or standalone CTA button in closing section)
  assert.doesNotMatch(aboutServiceComponent, /aboutService\.closing/);
  assert.doesNotMatch(aboutServiceComponent, /section\.cta/);
});

test('web-maintenance faq component matches homepage faq layout with radial gradient accordion and partner trust badges', () => {
  // Two-column layout with sticky sidebar
  assert.match(faqComponent, /grid-cols-1 lg:grid-cols-12/);
  assert.match(faqComponent, /lg:sticky lg:top-28/);

  // Trust badges with partner logos
  assert.match(faqComponent, /partnerLogos\.map/);

  // Accordion
  assert.match(faqComponent, /web-maintenance-faq-accordion/);
  assert.match(faqComponent, /faq-icon-minus/);
  assert.match(faqComponent, /faq-icon-plus/);
  assert.match(faqComponent, /radial-gradient/);
});

test('topbar includes web-maintenance in language toggle routes and mega menu', () => {
  assert.match(topBarComponent, /isWebMaintenance/);
  assert.match(topBarComponent, /\/id\/layanan\/web-maintenance/);
  assert.match(topBarComponent, /\/services\/web-maintenance/);
});

test('translations for web-maintenance follow antislop rules with zero em dashes', () => {
  const enIndex = translations.indexOf('webMaintenanceService: {');
  assert.ok(enIndex > 0, 'webMaintenanceService must exist in EN translations');

  const idIndex = translations.indexOf('webMaintenanceService: {', enIndex + 1);
  assert.ok(idIndex > 0, 'webMaintenanceService must exist in ID translations');

  assert.doesNotMatch(translations, /—/, 'Antislop R-02 violation: em dash found anywhere in translations.ts');
  assert.doesNotMatch(heroComponent, /—/, 'Antislop R-02 violation in heroComponent');
  assert.doesNotMatch(featuresComponent, /—/, 'Antislop R-02 violation in featuresComponent');
  assert.doesNotMatch(aboutServiceComponent, /—/, 'Antislop R-02 violation in aboutServiceComponent');
  assert.doesNotMatch(faqComponent, /—/, 'Antislop R-02 violation in faqComponent');
});
