import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import test from 'node:test';

const enPage = readFileSync(
  new URL('../src/pages/services/seo.astro', import.meta.url),
  'utf8',
);

const idPage = readFileSync(
  new URL('../src/pages/id/layanan/seo.astro', import.meta.url),
  'utf8',
);

const enAliasPage = readFileSync(
  new URL('../src/pages/layanan/seo.astro', import.meta.url),
  'utf8',
);

const idAliasPage = readFileSync(
  new URL('../src/pages/id/services/seo.astro', import.meta.url),
  'utf8',
);

const heroComponent = readFileSync(
  new URL('../src/components/services/SeoHero.astro', import.meta.url),
  'utf8',
);

const featuresComponent = readFileSync(
  new URL('../src/components/services/SeoFeatures.astro', import.meta.url),
  'utf8',
);

const aboutServiceComponent = readFileSync(
  new URL('../src/components/services/SeoAboutService.astro', import.meta.url),
  'utf8',
);

const faqComponent = readFileSync(
  new URL('../src/components/services/SeoFaq.astro', import.meta.url),
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

test('seo pages and aliases exist and render hero, features, about-service editorial, faq, and single footer via layout', () => {
  assert.match(enPage, /<SeoHero/);
  assert.match(enPage, /<SeoFeatures/);
  assert.match(enPage, /<SeoAboutService/);
  assert.doesNotMatch(enPage, /<SeoExploreSolutions/);
  assert.match(enPage, /<SeoFaq/);
  assert.match(enPage, /<LetsTalk/);
  assert.match(enPage, /<BackToTop/);
  assert.doesNotMatch(enPage, /<Footer/);

  assert.match(idPage, /<SeoHero/);
  assert.match(idPage, /<SeoFeatures/);
  assert.match(idPage, /<SeoAboutService/);
  assert.doesNotMatch(idPage, /<SeoExploreSolutions/);
  assert.match(idPage, /<SeoFaq/);
  assert.match(idPage, /<LetsTalk/);
  assert.match(idPage, /<BackToTop/);
  assert.doesNotMatch(idPage, /<Footer/);

  assert.match(enAliasPage, /<SeoHero/);
  assert.match(idAliasPage, /<SeoHero/);
});

test('seo hero component includes frosted card and 3D architectural medallion asset', () => {
  // Frosted glass card
  assert.match(heroComponent, /backdrop-blur/);
  assert.match(heroComponent, /rounded-\[24px\]|rounded-\[36px\]/);
  assert.match(heroComponent, /shadow-\[0_20px_60px/);

  // Breadcrumb navigation
  assert.match(heroComponent, /aria-label="Breadcrumb"/);

  // 3D Architectural medallion artwork exists on disk and is referenced
  assert.match(heroComponent, /seo_hero_disc\.webp/);
  const assetExists = existsSync(new URL('../public/services/seo_hero_disc.webp', import.meta.url));
  assert.equal(assetExists, true, 'public/services/seo_hero_disc.webp must exist');

  // Amber CTA pill
  assert.match(heroComponent, /#f5a623/);

  // Quick jump links with diagonal arrows
  assert.match(heroComponent, /data\.quickLinks\.links\.map/);
  assert.match(heroComponent, /M7 17L17 7M17 7H7M17 7V17/);

  // Partner logos
  assert.match(heroComponent, /partnerLogos\.map/);
  assert.match(heroComponent, /\/partners\/anytime\.png/);
});

test('seo features component reproduces 3-column compact editorial card layout with all 9 capabilities', () => {
  // 3-column grid
  assert.match(featuresComponent, /grid-cols-1 md:grid-cols-2 lg:grid-cols-3/);

  // Compact card frame matching enterprise standard
  assert.match(featuresComponent, /feature-card/);
  assert.match(featuresComponent, /rounded-\[20px\]/);

  // Icons for SEO features
  assert.match(featuresComponent, /item\.icon === 'strategy'/);
  assert.match(featuresComponent, /item\.icon === 'content'/);
  assert.match(featuresComponent, /item\.icon === 'ai-readiness'/);
  assert.match(featuresComponent, /item\.icon === 'research'/);
  assert.match(featuresComponent, /item\.icon === 'authority'/);
  assert.match(featuresComponent, /item\.icon === 'conversion'/);
  assert.match(featuresComponent, /item\.icon === 'technical'/);
  assert.match(featuresComponent, /item\.icon === 'monitoring'/);
  assert.match(featuresComponent, /item\.icon === 'solutions'/);

  // Ambient multi-spectrum aurora glow
  assert.match(featuresComponent, /radial-gradient/);
});

test('seo about-service component reproduces editorial layout with sticky and mobile table of contents', () => {
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

test('seo faq component matches homepage faq layout with radial gradient accordion and partner trust badges', () => {
  // Two-column layout with sticky sidebar
  assert.match(faqComponent, /grid-cols-1 lg:grid-cols-12/);
  assert.match(faqComponent, /lg:sticky lg:top-28/);

  // Trust badges with partner logos
  assert.match(faqComponent, /partnerLogos\.map/);

  // Accordion
  assert.match(faqComponent, /seo-faq-accordion/);
  assert.match(faqComponent, /faq-icon-minus/);
  assert.match(faqComponent, /faq-icon-plus/);
  assert.match(faqComponent, /bg-\[radial-gradient\(ellipse_at_top_left/);
});

test('topbar includes seo in language toggle routes and mega menu', () => {
  assert.match(topBarComponent, /isSeo/);
  assert.match(topBarComponent, /\/id\/layanan\/seo/);
  assert.match(topBarComponent, /\/services\/seo/);
});

test('translations for seo follow antislop rules with zero em dashes', () => {
  const enIndex = translations.indexOf('seoService: {');
  assert.ok(enIndex > 0, 'seoService must exist in EN translations');

  const idIndex = translations.indexOf('seoService: {', enIndex + 1);
  assert.ok(idIndex > 0, 'seoService must exist in ID translations');

  assert.doesNotMatch(translations, /—/, 'Antislop R-02 violation: em dash found anywhere in translations.ts');
  assert.doesNotMatch(heroComponent, /—/, 'Antislop R-02 violation in heroComponent');
  assert.doesNotMatch(featuresComponent, /—/, 'Antislop R-02 violation in featuresComponent');
  assert.doesNotMatch(aboutServiceComponent, /—/, 'Antislop R-02 violation in aboutServiceComponent');
  assert.doesNotMatch(faqComponent, /—/, 'Antislop R-02 violation in faqComponent');
});
