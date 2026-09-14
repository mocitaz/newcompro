import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const layoutComponent = readFileSync(
  new URL('../src/layouts/Layout.astro', import.meta.url),
  'utf8',
);

const globalCss = readFileSync(
  new URL('../src/styles/global.css', import.meta.url),
  'utf8',
);

const heroFiles = [
  'WebDevHero.astro',
  'SoftwareDevHero.astro',
  'MobileDevHero.astro',
  'WorkflowAutoHero.astro',
  'SeoHero.astro',
  'AiSearchHero.astro',
  'SeoAuditHero.astro',
  'WebMaintenanceHero.astro',
];

const aboutFiles = [
  'WebDevAboutService.astro',
  'SoftwareDevAboutService.astro',
  'MobileDevAboutService.astro',
  'WorkflowAutoAboutService.astro',
  'SeoAboutService.astro',
  'AiSearchAboutService.astro',
  'SeoAuditAboutService.astro',
  'WebMaintenanceAboutService.astro',
];

test('global scroll and motion engine in Layout.astro supports text mode and scroll parallax', () => {
  assert.match(layoutComponent, /applyRevealClass/);
  assert.match(layoutComponent, /mode === 'text'/);
  assert.match(layoutComponent, /reveal-text-active/);
  assert.match(layoutComponent, /setupScrollParallax/);
  assert.match(layoutComponent, /data-hero-parallax/);
  assert.match(layoutComponent, /prefers-reduced-motion/);
});

test('global.css defines smooth scroll, text reveals, 3d float, and reduced motion safeguards', () => {
  assert.match(globalCss, /scroll-behavior:\s*smooth/);
  assert.match(globalCss, /scroll-padding-top:\s*6rem/);
  assert.match(globalCss, /\.reveal-text-init/);
  assert.match(globalCss, /\.reveal-text-active/);
  assert.match(globalCss, /@keyframes hero3dFloat/);
  assert.match(globalCss, /\.hero-3d-float/);
  assert.match(globalCss, /\.hero-parallax-element/);
  assert.match(globalCss, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
});

test('all 8 service heroes include data-hero-parallax and hero-3d-float', () => {
  for (const filename of heroFiles) {
    const content = readFileSync(
      new URL(`../src/components/services/${filename}`, import.meta.url),
      'utf8',
    );
    assert.match(
      content,
      /data-hero-parallax="0\.14"/,
      `${filename} missing data-hero-parallax="0.14"`,
    );
    assert.match(
      content,
      /hero-3d-float/,
      `${filename} missing hero-3d-float class`,
    );
  }
});

test('all 8 service about components include reveal-text-init and enhanced active TOC tracking', () => {
  for (const filename of aboutFiles) {
    const content = readFileSync(
      new URL(`../src/components/services/${filename}`, import.meta.url),
      'utf8',
    );
    assert.match(
      content,
      /data-reveal="text"/,
      `${filename} missing data-reveal="text"`,
    );
    assert.match(
      content,
      /reveal-text-init/,
      `${filename} missing reveal-text-init class`,
    );
    assert.match(
      content,
      /font-semibold/,
      `${filename} missing font-semibold on active TOC highlight`,
    );
  }
});

test('homepage hero includes data-hero-parallax and reveal classes', () => {
  const heroContent = readFileSync(
    new URL('../src/components/Hero.astro', import.meta.url),
    'utf8',
  );
  assert.match(heroContent, /data-hero-parallax="0\.18"/);
  assert.match(heroContent, /data-reveal="title"/);
  assert.match(heroContent, /data-reveal="text"/);
});

test('about page foundation includes reveal-text-init on narrative sections', () => {
  const aboutFoundation = readFileSync(
    new URL('../src/components/AboutFoundation.astro', import.meta.url),
    'utf8',
  );
  assert.match(aboutFoundation, /data-reveal="text"/);
  assert.match(aboutFoundation, /reveal-text-init/);
});
