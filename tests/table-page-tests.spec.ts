import { test, expect } from '@playwright/test';
import HomePage from '../services/pages/home.page';
import HomePageSteps from '../services/steps/homepage.steps';
import TablePage from '../services/pages/table.page';
import TablePageSteps from '../services/steps/tablepage.steps';


test.describe('Table operations. @table', () => {

    let homePage: HomePage;
    let homePageSteps: HomePageSteps;

    let tablePage: TablePage;
    let tablePageSteps: TablePageSteps;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        homePageSteps = new HomePageSteps(page, homePage);

        await page.goto('https://letcode.in/test');

        await homePageSteps.navigateToTablePage();
        tablePage = new TablePage(page);
        tablePageSteps = new TablePageSteps(page, tablePage);
    });

    test('Add all the prices and check if the total is correct.', async ({}) => {

        let expectedSum = await tablePageSteps.getSumOfProductsPrices();
        let sum = Number(await tablePageSteps.getTotalPrice());
        expect(sum).toEqual(expectedSum);
    });
})