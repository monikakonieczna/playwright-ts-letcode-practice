import type { PlaywrightTestConfig } from '@playwright/test';
import * as envURLs from './environments.json';

/* Environments URLs */
const env = {
  dev: envURLs['dev'],
  prod: envURLs['prod'],
};

export const config: PlaywrightTestConfig = {
  testDir: './tests',
  fullyParallel: true,

  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10000
  },

  forbidOnly: !!process.env.CI,

  reporter: [['junit', {outputFile: 'reports/results-junit.xml'}], ['html', { outputFolder: 'reports/html/'}]],

  use: {
    viewport: null,
    baseURL: 'https://letcode.in/test',
    browserName: 'chromium',
    screenshot: 'on',
    acceptDownloads: true,
    trace: 'on',
    headless: false,
    launchOptions: {
      args: ["--start-maximized"]
    }
  },

  retries: 1,

};

export default config;
