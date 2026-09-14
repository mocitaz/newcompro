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
  assert.match(topBar, /hover:bg-slate-100/);
  assert.match(topBar, /hover:text-slate-950/);
});

test('industry menu renders clean domain sectors without photo preview', () => {
  assert.doesNotMatch(topBar, /industry-preview-slide/);
  assert.match(topBar, /t\.nav\.industriesMega\.items/);
  assert.match(topBar, /hover:text-slate-950/);

  const expectedIndustryIds = [
    'banking',
    'tech-saas',
    'manufacturing',
    'healthcare',
    'business-services',
    'insurance',
    'education',
    'telecom',
    'retail',
    'logistics',
  ];

  for (const id of expectedIndustryIds) {
    const regex = new RegExp(`item\\.id === '${id}'`);
    assert.match(topBar, regex, `Expected icon check for industry id: ${id}`);
  }
});

test('left-column dropdown CTAs share the simple ecosystem-link treatment', () => {
  assert.match(topBar, /href=\{(?:industriesSectionUrl|industriesHubUrl)\}[\s\S]{0,220}group\/all inline-flex items-center gap-1\.5 text-xs font-semibold text-slate-900/);
  assert.match(topBar, /href=\{resolveHref\(t\.nav\.servicesMega\.ctaHref\)\}[\s\S]{0,260}group\/btn inline-flex items-center gap-1\.5 text-xs font-semibold text-slate-900/);
  assert.match(topBar, /href=\{(?:resolveHref\('\/layanan'\)|ecosystemUrl)\}[\s\S]{0,220}text-xs font-semibold text-slate-900/);
});

test('hero dropdowns transition through a neutral glass treatment', () => {
  assert.match(topBar, /#main-topbar-header:not\(\.scrolled\) \.mega-panel/);
  assert.match(topBar, /background-color: rgba\(15, 23, 42, 0\.82\)/);
  assert.match(topBar, /#main-topbar-header:not\(\.scrolled\) \.mega-overview/);
  assert.match(topBar, /transition-\[background-color,border-color,box-shadow\] duration-500 ease-\[cubic-bezier\(0\.16,1,0\.3,1\)\]/);
  assert.match(topBar, /opacity 0\.28s cubic-bezier/);
  assert.match(topBar, /transform 0\.36s cubic-bezier/);
});

test('resources mega dropdown renders compact 2-row (3, 2) featured products', async () => {
  assert.match(topBar, /grid grid-cols-6/);
  assert.match(topBar, /h-20 sm:h-22 xl:h-24/);
  assert.match(topBar, /idx < 3 \? "col-span-2" : "col-span-3"/);
  assert.match(topBar, /line-clamp-2/);

  const translationsSource = await readFile(
    new URL('../src/i18n/translations.ts', import.meta.url),
    'utf8',
  );

  for (const name of ['Workspace', 'Ticketing', 'LIMS', 'TraKerja', 'PixelPlay!']) {
    const nameRegex = new RegExp(`name:\\s*'${name.replace('!', '\\!')}'`);
    assert.match(translationsSource, nameRegex, `Expected featured product: ${name}`);
  }

  const expectedAssets = [
    'public/resource_workspace.png',
    'public/resource_workspace.webp',
    'public/resource_ticketing.png',
    'public/resource_ticketing.webp',
    'public/resource_LIMS.png',
    'public/resource_LIMS.webp',
    'public/resource_trakerja.webp',
    'public/resource_pixelplay.webp',
  ];

  for (const asset of expectedAssets) {
    const assetContent = await readFile(new URL(`../${asset}`, import.meta.url));
    assert.ok(assetContent.length > 0, `Asset ${asset} must not be empty`);
  }
});


