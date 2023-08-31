import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Svelte CoreUI Icons' })).toBeVisible();
});

test('brand page has expected h1', async ({ page }) => {
  await page.goto('/brand');
  await expect(page.getByRole('heading', { name: 'Svelte CoreUI Icons: Brand' })).toBeVisible();
});

test('Flag page has expected h1', async ({ page }) => {
  await page.goto('/flag');
  await expect(page.getByRole('heading', { name: 'Svelte CoreUI Icons: Flag' })).toBeVisible();
});

test('Free page has expected h1', async ({ page }) => {
  await page.goto('/free');
  await expect(page.getByRole('heading', { name: 'Svelte CoreUI Icons: Free' })).toBeVisible();
});
