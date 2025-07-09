// Test: Login Test
// Framework: Playwright (TypeScript)
// Generated: 2025-07-09T03:24:46.340Z
// Description: No description provided
// Based on uploaded Puppeteer file

import { test, expect, Page } from '@playwright/test';

test.describe('Login Test', () => {
  test('Login Test', async ({ page }) => {
    // Step 1: Navigate to chrome://new-tab-page/
    await page.goto('chrome://new-tab-page/');

    // Step 2: Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Step 3: Fill field with "Admin"
    await page.fill('form > div:nth-of-type(1) input', 'Admin');

    // Step 4: Click on element
    await page.click('form > div:nth-of-type(2) input');

    // Step 5: Fill field with "admin123"
    await page.fill('form > div:nth-of-type(2) input', 'admin123');

    // Step 6: Click on element
    await page.click('button');
  });
});