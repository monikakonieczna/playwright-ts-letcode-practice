import { test, expect } from '@playwright/test';
import HomePage from '../services/pages/home.page';
import HomePageSteps from '../services/steps/homepage.steps';
import AlertPage from '../services/pages/alert.page';
import AlertPageSteps from '../services/steps/alertpage.steps';


test.describe('Interactions with alerts elements. @alert', () => {

    let homePage: HomePage;
    let homePageSteps: HomePageSteps;

    let alertPage: AlertPage;
    let alertPageSteps: AlertPageSteps;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        homePageSteps = new HomePageSteps(page, homePage);

        await page.goto('https://letcode.in/test');

        await homePageSteps.navigateToAlertPage();
        alertPage = new AlertPage(page);
        alertPageSteps = new AlertPageSteps(page, alertPage);
    });

    test('Task 1: Accept the Alert', async ({}) => {
        await alertPageSteps.acceptSimpleAlertButton();
    });

    test('Task 2: Dismiss the Alert & print the alert text', async ({}) => {
        await alertPageSteps.dismissAndPrintConfirmAlert();
    });

    test('Task 3: Type your name & accept', async ({}) => {
        const expectedText = "Your name is: monika";

        await alertPageSteps.typeTextAndAcceptAlert("monika");
        let actualText = await alertPageSteps.getNotificationMessage();

        expect(actualText).toBe(expectedText);

    });

    test('Task 4: Sweet alert', async ({}) => {
        await alertPageSteps.closeModernAlert();
    });
})
