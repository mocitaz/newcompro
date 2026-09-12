import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const component = readFileSync(
  new URL('../src/components/AiDisciplines.astro', import.meta.url),
  'utf8',
);

test('desktop header places description left and title right', () => {
  assert.match(component, /lg:order-2 lg:col-span-5/);
  assert.match(component, /lg:order-1 lg:col-span-7/);

  const titlePosition = component.indexOf('{t.aiDisciplines.headline}');
  const descriptionPosition = component.indexOf('{t.aiDisciplines.description}');
  assert.ok(titlePosition < descriptionPosition);
});

test('service cards use a clean editorial image and caption layout', () => {
  assert.match(component, /gap-4[^\n]*sm:gap-5/);
  assert.match(component, /aspect-\[4\/5\] overflow-hidden rounded-\[14px\]/);
  assert.match(component, /group-hover:scale-\[1\.02\]/);
  assert.match(component, /min-h-\[3rem\]/);
  assert.doesNotMatch(component, /bg-gradient-to-t/);
  assert.doesNotMatch(component, /hover:-translate-y/);
  assert.doesNotMatch(component, /hover:shadow-\[/);
});

test('tailored engineering has its own compact modular background', () => {
  assert.match(component, /ai_disciplines_bg_v3\.webp/);
  assert.match(component, /ai_disciplines_bg_v3\.jpg/);
  assert.match(component, /tailored-background-image/);
  assert.match(component, /mask-image: radial-gradient/);
  assert.match(component, /tailored-background-fade/);
  assert.match(component, /to bottom,/);
  assert.match(component, /class="home-section relative isolate overflow-hidden bg-\[#fbfbfc\]"/);
  assert.match(component, /class="home-container relative z-10"/);
  assert.doesNotMatch(component, /tech_stack_bg/);
});
