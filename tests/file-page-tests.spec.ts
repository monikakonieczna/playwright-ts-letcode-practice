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
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        homePageSteps = new HomePageSteps(page, homePage);

        await page.goto('https://letcode.in/test');

        await homePageSteps.navigateToFilePage();
        filePage = new FilePage(page);
        filePageSteps = new FilePageSteps(page, filePage);
    });

    test('Download a single excel file and assert.', async ({ }) => {
        const expectedFileName = 'sample.xlsx';
        const result = await filePageSteps.downloadExcel();
        expect(fs.existsSync(result[0])).toBeTruthy();
        expect(result[1]).toBe(expectedFileName);
        console.log(((await fs.promises.stat(result[0] as string)).size));
        expect((await fs.promises.stat(result[0] as string)).size).toBeGreaterThan(200);
    });

    test('Download single pdf file and assert.', async ({ }) => {
        const expectedFileName = 'sample.pdf';
        const result = await filePageSteps.downloadPdf();

        expect(fs.existsSync(result[0])).toBeTruthy();
        expect(result[1]).toBe(expectedFileName);
        console.log(((await fs.promises.stat(result[0] as string)).size));
        expect((await fs.promises.stat(result[0] as string)).size).toBeGreaterThan(200);
    });

    test('Download single text file and assert.', async ({ }) => {
        const expectedFileName = 'sample.txt';
        const result = await filePageSteps.downloadText();

        expect(fs.existsSync(result[0])).toBeTruthy();
        expect(result[1]).toBe(expectedFileName);
        console.log(((await fs.promises.stat(result[0] as string)).size));
        expect((await fs.promises.stat(result[0] as string)).size).toBeGreaterThan(200);
    });
})