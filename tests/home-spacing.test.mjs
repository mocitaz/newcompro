import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), 'utf8');
}

test('homepage content sections share one responsive vertical rhythm', async () => {
  const components = [
    'src/components/CompanyOverview.astro',
    'src/components/AiDisciplines.astro',
    'src/components/Industries.astro',
    'src/components/TechStack.astro',
    'src/components/Faq.astro',
    'src/components/LetsTalk.astro',
  ];

  for (const component of components) {
    assert.match(await source(component), /class="[^"]*home-section[^"]*"/);
  }
});

test('homepage content uses a shared container gutter', async () => {
  const components = [
    'src/components/CompanyOverview.astro',
    'src/components/AiDisciplines.astro',
    'src/components/Industries.astro',
    'src/components/Faq.astro',
  ];

  for (const component of components) {
    assert.match(await source(component), /class="[^"]*home-container[^"]*"/);
  }
});

test('shared spacing scale is defined for mobile, tablet, and desktop', async () => {
  const css = await source('src/styles/global.css');

  assert.match(css, /\.home-section\s*{\s*padding-block:\s*4rem;/);
  assert.match(css, /@media \(min-width: 40rem\)[\s\S]*?\.home-section\s*{\s*padding-block:\s*5rem;/);
  assert.match(css, /@media \(min-width: 64rem\)[\s\S]*?\.home-section\s*{\s*padding-block:\s*6rem;/);
});
