// Test: User Flow Test
// Framework: Playwright (TypeScript)
// Generated: 2025-07-04T04:28:47.429Z
// Description: No description provided

import { test, expect, Page } from '@playwright/test';

test.describe('User Flow Test', () => {
  test('User Flow Test', async ({ page }) => {
    // Step 1: Navigate to "https://opensource-demo.orangehrmlive.com/"
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    // Step 2: Fill "Username" with "Admin"
    await page.fill('input[placeholder*="Admin" i], input[name*="admin" i], [data-testid*="admin" i]', 'Username');

    // Step 3: Fill "Password" with "admin123"
    await page.fill('input[placeholder*="admin123" i], input[name*="admin123" i], [data-testid*="admin123" i]', 'Password');

    // Step 4: Click on "Login" Button
    await page.click('button:has-text("Login"), [role="button"]:has-text("Login"), a:has-text("Login")');

    // Step 5: Assert that "Dashboard" is visible
    await expect(page.locator(':has-text("Dashboard")')).toBeVisible();
  });
});