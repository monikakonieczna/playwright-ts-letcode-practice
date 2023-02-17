import { test, expect } from '@playwright/test';
import HomePage from '../services/pages/home.page';
import HomePageSteps from '../services/steps/homepage.steps';
import FilePage from '../services/pages/file.page';
import FilePageSteps from '../services/steps/filepage.steps';


test.describe('Downloading files. @drop', () => {

    let homePage: HomePage;
    let homePageSteps: HomePageSteps;

    let filePage: FilePage;
    let filePageSteps: FilePageSteps;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        homePageSteps = new HomePageSteps(page, homePage);

        await page.goto('https://letcode.in/test');

        //await homePageSteps.navigateToFilePage(); - not implemented yet
        filePage = new FilePage(page);
        filePageSteps = new FilePageSteps(page, filePage);
    });

    test('Download Excel File.', async ({}) => {
    });

    test('Download Pdf File.', async ({}) => {
    });

    test('Download Text File.', async ({}) => {
    });
})