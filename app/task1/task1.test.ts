import { test, expect } from '@playwright/test';

test('displays main categories on successful API response', async ({ page }) => {
  await page.route('**/get_all_cats', (route) =>
    route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify({
        code: 200,
        msg: 'get Parent Cats with children',
        // Include only a snippet of your full response here for brevity
        data: {
          categories: [
            { id: 1, name: 'MOTORCYCLES & ACCESSORIES' },
            { id: 2, name: 'FURNITURE & FURNISHINGS FITTINGS' }
          ]
        }
      })
    })
  );

  await page.goto('http://localhost:3000/task1');

  await page.waitForSelector('id=mainCategory');

  await page.click('id=mainCategory');
  await expect(page.locator('text=FURNITURE & FURNISHINGS FITTINGS')).toBeVisible();
});

test('validates required fields before form submission', async ({ page }) => {
  await page.goto('http://localhost:3000/task1');

  await page.click('text="Submit"');

  await expect(page.locator('text=Main Category is required')).toBeVisible();
});
