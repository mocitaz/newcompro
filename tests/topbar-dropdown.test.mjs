import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const topBar = await readFile(
  new URL('../src/components/TopBar.astro', import.meta.url),
  'utf8',
);

test('desktop dropdowns connect directly to the top bar', () => {
  const attachedPanels = topBar.match(/dropdown-menu absolute top-full left-1\/2 w-\[calc\(100vw-1rem\)\] max-w-\[1760px\] z-50/g) ?? [];

  assert.equal(attachedPanels.length, 3);
  assert.match(topBar, /rounded-b-2xl p-4 sm:p-5 xl:p-6/);
  assert.match(topBar, /rounded-b-2xl p-5 sm:p-6 xl:p-7/);
  assert.doesNotMatch(topBar, /dropdown-menu absolute[^\n]*pt-2\.5/);
});

test('top bar dropdowns use neutral slate interaction states', () => {
  assert.doesNotMatch(topBar, /indigo|purple/);
  assert.match(topBar, /item\.classList\.add\('bg-slate-200\/80', 'text-slate-950', 'font-semibold', 'is-active'/);
  assert.match(topBar, /hover:text-slate-950/);
});

test('industry menu opens with a neutral preview instead of Banking', () => {
  assert.match(topBar, /data-industry-preview-empty/);
  assert.doesNotMatch(topBar, /idx === 0/);
  assert.match(topBar, /trigger\.addEventListener\('mouseenter', \(\) => activateIndustryPreview\(trigger\)\)/);
  assert.match(topBar, /trigger\.addEventListener\('focus', \(\) => activateIndustryPreview\(trigger\)\)/);
  assert.match(topBar, /industryDropdown\?\.addEventListener\('mouseleave', resetIndustryPreview\)/);
});

test('left-column dropdown CTAs share the simple ecosystem-link treatment', () => {
  assert.match(topBar, /href=\{industriesSectionUrl\}[\s\S]{0,220}group\/all inline-flex items-center gap-1\.5 text-xs font-semibold text-slate-900/);
  assert.match(topBar, /href=\{resolveHref\(t\.nav\.servicesMega\.ctaHref\)\}[\s\S]{0,260}group\/btn inline-flex items-center gap-1\.5 text-xs font-semibold text-slate-900/);
  assert.match(topBar, /href=\{resolveHref\('\/layanan'\)\}[\s\S]{0,220}text-xs font-semibold text-slate-900/);
});

test('hero dropdowns transition through a neutral glass treatment', () => {
  assert.match(topBar, /#main-topbar-header:not\(\.scrolled\) \.mega-panel/);
  assert.match(topBar, /background-color: rgba\(15, 23, 42, 0\.82\)/);
  assert.match(topBar, /#main-topbar-header:not\(\.scrolled\) \.mega-overview/);
  assert.match(topBar, /transition-\[background-color,border-color,box-shadow\] duration-500 ease-\[cubic-bezier\(0\.16,1,0\.3,1\)\]/);
  assert.match(topBar, /opacity 0\.28s cubic-bezier/);
  assert.match(topBar, /transform 0\.36s cubic-bezier/);
});
