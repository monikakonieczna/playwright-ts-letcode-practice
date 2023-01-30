import { test, expect } from '@playwright/test';
import HomePage from '../services/pages/home.page';
import HomePageSteps from '../services/steps/homepage.steps';
import DropPage from '../services/pages/drop.page';
import DropPageSteps from '../services/steps/droppage.steps';


test.describe('Executing drag and drop on elements. @drop', () => {

    let homePage: HomePage;
    let homePageSteps: HomePageSteps;

    let dropPage: DropPage;
    let dropPageSteps: DropPageSteps;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        homePageSteps = new HomePageSteps(page, homePage);

        await page.goto('https://letcode.in/test');

        await homePageSteps.navigateToDropPage();
        dropPage = new DropPage(page);
        dropPageSteps = new DropPageSteps(page, dropPage);
    });

    test('Drag the source box within the target box', async ({}) => {
        let expectedMessage = "Dropped!";

        await dropPageSteps.dragAndDrop();
        let message = await dropPageSteps.getDestinationMessage();
        expect(message).toBe(expectedMessage);
    });
})