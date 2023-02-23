import { test, expect } from '@playwright/test';
import HomePage from '../services/pages/home.page';
import HomePageSteps from '../services/steps/homepage.steps';
import FormPage from '../services/pages/form.page';
import FormPageSteps from '../services/steps/formpage.steps';


test.describe('Test personal form - @form.', () => {

    let homePage: HomePage;
    let homePageSteps: HomePageSteps;

    let formPage: FormPage;
    let formPageSteps: FormPageSteps;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        homePageSteps = new HomePageSteps(page, homePage);

        await page.goto('https://letcode.in/test');

        await homePageSteps.navigateToFormPage();
        formPage = new FormPage(page);
        formPageSteps = new FormPageSteps(page, formPage);
    });
    
    test('Happy path - fulfill form and submit.', async ({ }) => {
    
    });
})