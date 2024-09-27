import React from 'react';

import { test, expect } from 'playwright/lib';

import Footer from './Footer';

test.describe('Footer component', () => {
  test('should render a basic footer', async({ render, page }) => {
    await render(<Footer/>);
    await expect(page.locator('text=Onyx Explorer')).toBeVisible();
  });
});
