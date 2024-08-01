//Playwright assessment:

//Exercise 4: Enable below configurations in playwright config file

import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    // Capture screenshot after each test failure.


    // Record trace only when retrying a test for the first time.


    // Record video only when retrying a test for the first time.

  },
});