import { test, expect } from '@playwright/test';
import HomePage from '../services/pages/home.page';
import HomePageSteps from '../services/steps/homepage.steps';
import FilePage from '../services/pages/file.page';
import FilePageSteps from '../services/steps/filepage.steps';
import * as fs from 'fs';


test.describe('Downloading files. @file', () => {

    let homePage: HomePage;
    let homePageSteps: HomePageSteps;

    let filePage: FilePage;
    let filePageSteps: FilePageSteps;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        homePageSteps = new HomePageSteps(page, homePage);

        await page.goto('https://letcode.in/test');

        await homePageSteps.navigateToFilePage();
        filePage = new FilePage(page);
        filePageSteps = new FilePageSteps(page, filePage);
    });

    test('Download a single excel file and assert.', async ({}) => {
        const filePath = await filePageSteps.downloadExcel();
        expect(fs.existsSync(filePath)).toBeTruthy();
    });

    test('Download single pdf file and assert.', async ({}) => {
        const filePath = await filePageSteps.downloadPdf();
        expect(fs.existsSync(filePath)).toBeTruthy();
    });

    test('Download single text file and assert.', async ({}) => {
        const filePath = await filePageSteps.downloadText();
        expect(fs.existsSync(filePath)).toBeTruthy();
    });
})