import type { PlaywrightTestConfig } from '@playwright/test';
import * as envURLs from './environments.json';

/* Environments URLs */
const env = {
  dev: envURLs['dev'],
  prod: envURLs['prod'],
};

export const config: PlaywrightTestConfig = {
  testDir: './tests',

  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },

  forbidOnly: !!process.env.CI,

  reporter: [['junit', {outputFile: 'reports/results-junit.xml'}], ['html', { outputFolder: 'reports/html/'}]],

  use: {
    baseURL: env[process.env.ENV],
    browserName: 'chromium',
    screenshot: 'on',
    acceptDownloads: true,
    trace: 'on',
    headless: false,
  },

  grep: [new RegExp(process.env.TAGS)],

  retries: 1,

};

export default config;
