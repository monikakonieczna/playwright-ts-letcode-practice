import { test } from '@playwright/test';
import * as input from '../test-data/input.json';
import HomePage from '../services/pages/home.page';
import HomePageSteps from '../services/steps/homepage.steps';

test.describe('', () => {

    let homePage: HomePage;
    let homePageSteps: HomePageSteps;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        homePageSteps = new HomePageSteps(page, homePage);

        await page.goto('/', {
            waitUntil: 'networkidle',
        });
    });

    test('', async ({}) => {
        await homePageSteps.clickEdit();
    });
})




test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});
