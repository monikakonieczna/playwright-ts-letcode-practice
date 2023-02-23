import { test, expect } from '@playwright/test';
import HomePage from '../services/pages/home.page';
import HomePageSteps from '../services/steps/homepage.steps';
import FormPage from '../services/pages/form.page';
import FormPageSteps from '../services/steps/formpage.steps';
import { Input } from '../services/enums/input.enum';
import { getUserData } from '../utils/data.generator';
import InputPageSteps from '../services/steps/inputpage.steps';


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

        let user = getUserData();
        let date = "1991-02-15";

        await formPageSteps.enterText(Input.FORM_FIRSTNAME, user.firstname);
        await formPageSteps.enterText(Input.FORM_LASTNAME, user.lastname);
        await formPageSteps.enterText(Input.FORM_EMAIL, user.email);
        await formPageSteps.selectCountryCode(user.countrycode);
        await formPageSteps.enterText(Input.FORM_PHONE, user.phone);
        await formPageSteps.enterText(Input.FORM_ADDRESS1, user.address1);
        await formPageSteps.enterText(Input.FORM_ADDRESS2, user.address2);
        await formPageSteps.enterText(Input.FORM_STATE, user.state);
        await formPageSteps.enterText(Input.FORM_POSTALCODE, user.postalcode);
        await formPageSteps.selectCountry();
        await formPageSteps.selectDate(date);
        

    
    });
})