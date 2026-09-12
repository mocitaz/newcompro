import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const component = readFileSync(
  new URL('../src/components/CompanyOverview.astro', import.meta.url),
  'utf8',
);
const translations = readFileSync(
  new URL('../src/i18n/translations.ts', import.meta.url),
  'utf8',
);

test('company overview stays focused without a capability label or rail', () => {
  assert.doesNotMatch(component, /overview\.sectionLabel/);
  assert.doesNotMatch(component, /overview\.capabilities/);
  assert.doesNotMatch(translations, /sectionLabel: ['"]Engineering capability['"]/);
  assert.doesNotMatch(translations, /title: ['"]Discover['"]/);
});

test('desktop layout balances the overview with an editorial office visual', () => {
  assert.match(component, /lg:col-span-7/);
  assert.match(component, /lg:col-span-5/);
  assert.doesNotMatch(component, /lg:mt-auto/);
  assert.match(component, /lg:mt-8/);
  assert.match(component, /border-t border-slate-300/);
  assert.doesNotMatch(component, /border-y border-slate-300/);
});

test('company overview typography matches the tailored engineering header', () => {
  assert.match(
    component,
    /text-2xl sm:text-3xl lg:text-\[2\.15rem\] font-bold text-slate-950 tracking-\[-0\.02em\] leading-tight font-sans/,
  );
  assert.match(
    component,
    /text-sm sm:text-base text-slate-600 leading-relaxed font-normal font-sans/,
  );
});

test('company overview keeps verified statistics and audience scope', () => {
  assert.match(component, /overview\.stats\.map/);
  assert.match(component, /overview\.audience/);
  assert.match(translations, /value: ['"]2\+['"]/);
  assert.match(translations, /value: ['"]15\+['"]/);
});

test('company overview uses the approved office visual', () => {
  assert.doesNotMatch(component, /company-overview-cloud/);
  assert.match(component, /company-overview-office-v1\.png/);
  assert.match(component, /<figure class="aspect-\[5\/4\] overflow-hidden rounded-\[18px\]/);
  assert.match(component, /lg:h-\[23rem\]/);
  assert.doesNotMatch(component, /<video/);
});
