import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import test from 'node:test';

const enPage = readFileSync(
  new URL('../src/pages/services/ai-search.astro', import.meta.url),
  'utf8',
);

const idPage = readFileSync(
  new URL('../src/pages/id/layanan/ai-search.astro', import.meta.url),
  'utf8',
);

const enAliasPage = readFileSync(
  new URL('../src/pages/layanan/ai-search.astro', import.meta.url),
  'utf8',
);

const idAliasPage = readFileSync(
  new URL('../src/pages/id/services/ai-search.astro', import.meta.url),
  'utf8',
);

const heroComponent = readFileSync(
  new URL('../src/components/services/AiSearchHero.astro', import.meta.url),
  'utf8',
);

const featuresComponent = readFileSync(
  new URL('../src/components/services/AiSearchFeatures.astro', import.meta.url),
  'utf8',
);

const aboutServiceComponent = readFileSync(
  new URL('../src/components/services/AiSearchAboutService.astro', import.meta.url),
  'utf8',
);

const faqComponent = readFileSync(
  new URL('../src/components/services/AiSearchFaq.astro', import.meta.url),
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

test('ai search pages and aliases exist and render hero, features, about-service editorial, faq, and single footer via layout', () => {
  assert.match(enPage, /<AiSearchHero/);
  assert.match(enPage, /<AiSearchFeatures/);
  assert.match(enPage, /<AiSearchAboutService/);
  assert.doesNotMatch(enPage, /<AiSearchExploreSolutions/);
  assert.match(enPage, /<AiSearchFaq/);
  assert.match(enPage, /<LetsTalk/);
  assert.match(enPage, /<BackToTop/);
  assert.doesNotMatch(enPage, /<Footer/);

  assert.match(idPage, /<AiSearchHero/);
  assert.match(idPage, /<AiSearchFeatures/);
  assert.match(idPage, /<AiSearchAboutService/);
  assert.doesNotMatch(idPage, /<AiSearchExploreSolutions/);
  assert.match(idPage, /<AiSearchFaq/);
  assert.match(idPage, /<LetsTalk/);
  assert.match(idPage, /<BackToTop/);
  assert.doesNotMatch(idPage, /<Footer/);

  assert.match(enAliasPage, /<AiSearchHero/);
  assert.match(idAliasPage, /<AiSearchHero/);
});

test('ai search hero component includes frosted card and 3D architectural medallion asset', () => {
  // Frosted glass card
  assert.match(heroComponent, /backdrop-blur/);
  assert.match(heroComponent, /rounded-\[24px\]|rounded-\[36px\]/);
  assert.match(heroComponent, /shadow-\[0_20px_60px/);

  // Breadcrumb navigation
  assert.match(heroComponent, /aria-label="Breadcrumb"/);

  // 3D Architectural medallion artwork exists on disk and is referenced
  assert.match(heroComponent, /ai_search_hero_disc\.webp/);
  const assetExists = existsSync(new URL('../public/services/ai_search_hero_disc.webp', import.meta.url));
  assert.equal(assetExists, true, 'public/services/ai_search_hero_disc.webp must exist');

  // Amber CTA pill
  assert.match(heroComponent, /#f5a623/);

  // Quick jump links with diagonal arrows
  assert.match(heroComponent, /data\.quickLinks\.links\.map/);
  assert.match(heroComponent, /M7 17L17 7M17 7H7M17 7V17/);

  // Partner logos
  assert.match(heroComponent, /partnerLogos\.map/);
  assert.match(heroComponent, /\/partners\/anytime\.png/);
});

test('ai search features component reproduces 3-column compact editorial card layout with all 9 capabilities', () => {
  // 3-column grid
  assert.match(featuresComponent, /grid-cols-1 md:grid-cols-2 lg:grid-cols-3/);

  // Compact card frame matching enterprise standard
  assert.match(featuresComponent, /feature-card/);
  assert.match(featuresComponent, /rounded-\[20px\]/);

  // Icons for AI search features
  assert.match(featuresComponent, /item\.icon === 'strategy'/);
  assert.match(featuresComponent, /item\.icon === 'entity'/);
  assert.match(featuresComponent, /item\.icon === 'monitoring'/);
  assert.match(featuresComponent, /item\.icon === 'aeo'/);
  assert.match(featuresComponent, /item\.icon === 'content'/);
  assert.match(featuresComponent, /item\.icon === 'synthesis'/);
  assert.match(featuresComponent, /item\.icon === 'geo'/);
  assert.match(featuresComponent, /item\.icon === 'technical'/);
  assert.match(featuresComponent, /item\.icon === 'authority'/);

  // Ambient multi-spectrum aurora glow
  assert.match(featuresComponent, /radial-gradient/);
});

test('ai search about-service component reproduces editorial layout with sticky and mobile table of contents', () => {
  // Main title and section ID
  assert.match(aboutServiceComponent, /id="about-service"/);
  assert.match(aboutServiceComponent, /aboutService\.title/);

  // Table of Contents
  assert.match(aboutServiceComponent, /TABLE OF CONTENTS|aboutService\.tocTitle/);
  assert.match(aboutServiceComponent, /sticky top-28/);
  assert.match(aboutServiceComponent, /border-l border-slate-200/);

  // Active scrollspy observer
  assert.match(aboutServiceComponent, /IntersectionObserver/);
  // Pure editorial flow matching previous sections (no separate card container or standalone CTA)
  assert.doesNotMatch(aboutServiceComponent, /aboutService\.closing/);
  assert.doesNotMatch(aboutServiceComponent, /section\.cta/);
});

test('ai search faq component matches homepage faq layout with radial gradient accordion and partner trust badges', () => {
  // Two-column layout with sticky sidebar
  assert.match(faqComponent, /grid-cols-1 lg:grid-cols-12/);
  assert.match(faqComponent, /lg:sticky lg:top-28/);

  // Trust badges with partner logos
  assert.match(faqComponent, /partnerLogos\.map/);

  // Accordion
  assert.match(faqComponent, /aisearch-faq-accordion/);
  assert.match(faqComponent, /faq-icon-minus/);
  assert.match(faqComponent, /faq-icon-plus/);
  assert.match(faqComponent, /bg-\[#fbfbfc\]/);
});

test('topbar includes ai-search in language toggle routes and mega menu', () => {
  assert.match(topBarComponent, /isAiSearch/);
  assert.match(topBarComponent, /\/id\/layanan\/ai-search/);
  assert.match(topBarComponent, /\/services\/ai-search/);
});

test('translations for ai search follow antislop rules with zero em dashes', () => {
  const enIndex = translations.indexOf('aiSearchService: {');
  assert.ok(enIndex > 0, 'aiSearchService must exist in EN translations');

  const idIndex = translations.indexOf('aiSearchService: {', enIndex + 1);
  assert.ok(idIndex > 0, 'aiSearchService must exist in ID translations');

  assert.doesNotMatch(translations, /—/, 'Antislop R-02 violation: em dash found anywhere in translations.ts');
  assert.doesNotMatch(heroComponent, /—/, 'Antislop R-02 violation in heroComponent');
  assert.doesNotMatch(featuresComponent, /—/, 'Antislop R-02 violation in featuresComponent');
  assert.doesNotMatch(aboutServiceComponent, /—/, 'Antislop R-02 violation in aboutServiceComponent');
  assert.doesNotMatch(faqComponent, /—/, 'Antislop R-02 violation in faqComponent');
});
