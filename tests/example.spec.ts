import { test, expect } from '@playwright/test';

const URL_PAGE = 'http://localhost:5173/';

test('load image and text', async ({ page }) => {
  await page.goto(URL_PAGE);

  const textParagraph = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const attrSrc = await image.getAttribute('src');
  const text = await textParagraph.textContent();

  console.log({attrSrc, text})

  await expect(text?.length).toBeGreaterThan(0)
  await expect(attrSrc?.startsWith('https://cataas.com')).toBeTruthy()



});

test('Click in Button', async ({ page }) => {
  await page.goto(URL_PAGE);

  // Add time stop 7s
  await new Promise(r => setTimeout(r, 7000));
  
  await page.screenshot({ path: "screenshot/page1.png" });

  // Click the get started Button.
  await page.getByRole('button').click();

  const textParagraph = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const attrSrc = await image.getAttribute('src');
  const text = await textParagraph.textContent();

  console.log({attrSrc, text})

  await expect(text?.length).toBeGreaterThan(0)
  await expect(attrSrc?.startsWith('https://cataas.com')).toBeTruthy()

  await new Promise(r => setTimeout(r, 7000));

  await page.screenshot({ path: "screenshot/page.png" });

  
});
