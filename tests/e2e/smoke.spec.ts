import { test, expect } from '@playwright/test';

test.describe('Marketing Site Smoke Tests', () => {
  test('should load the home page without crashing', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('http://127.0.0.1:3002/');
  });
});
