import { test, expect } from '@playwright/test';
import HomePage from '../services/pages/home.page';
import HomePageSteps from '../services/steps/homepage.steps';
import RadioPage from '../services/pages/radio.page';
import RadioPageSteps from '../services/steps/radiopage.steps';
import { Radio } from '../services/enums/radio.enum';
import { Checkbox } from '../services/enums/radio.enum';

test.describe('Interactions with radio & checkboxes elements. @radio', () => {

    let homePage: HomePage;
    let homePageSteps: HomePageSteps;

    let radioPage: RadioPage;
    let radioPageSteps: RadioPageSteps;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        homePageSteps = new HomePageSteps(page, homePage);
    
        await page.goto('https://letcode.in/test');
    
        await homePageSteps.navigateToRadioPage();
        radioPage = new RadioPage(page);
        radioPageSteps = new RadioPageSteps(page, radioPage);
    });


    test('Radio 1: Select yes option and verify. ', async ({}) => {
        await radioPageSteps.selectRadio(Radio.FIRST_YES);
        expect(await radioPage.getRadio(Radio.FIRST_YES).isChecked()).toBeTruthy();
        expect(await radioPage.getRadio(Radio.FIRST_NO).isChecked()).toBeFalsy();
    });
    
    test('Radio 2: Cofirm you can select only one radio button.', async ({}) => {
        await radioPageSteps.selectRadio(Radio.SECOND_YES);
        await radioPageSteps.selectRadio(Radio.SECOND_NO);
        expect(await radioPage.getRadio(Radio.SECOND_YES).isChecked()).toBeFalsy();
        expect(await radioPage.getRadio(Radio.SECOND_NO).isChecked()).toBeTruthy();
    });

    //todo: how playwright checks whether checkbox is checked? There is a bug which I can't find with test automation - improve test
    test('Radio 3: Cofirm you can select only one radio button.', async ({}) => {
        await radioPageSteps.selectRadio(Radio.THIRD_YES);
        await radioPageSteps.selectRadio(Radio.THIRD_NO);
        expect(await radioPage.getRadio(Radio.THIRD_YES).isChecked()).toBeTruthy();
        expect(await radioPage.getRadio(Radio.THIRD_NO).isChecked()).toBeTruthy();
    });

    test('Radio 4: Verify that radio Bar is selected by default.', async ({}) => {
        expect(await radioPage.getRadio(Radio.BAR).isChecked()).toBeTruthy();
    });

    test('Radio 4: Verify that radio Foo is not selected by default.', async ({}) => {
        expect(await radioPage.getRadio(Radio.FOO).isChecked()).toBeFalsy();
    });

    test('Radio 5: Confirm last field is disabled.', async ({}) => {
        expect(await radioPage.getRadio(Radio.MAYBE).isEnabled()).toBeFalsy();
    });

    test('Checkbox 1: Verify that checkbox is selected.', async ({}) => {
        expect(await radioPage.getCheckbox(Checkbox.REMEMEBER_ME).isChecked()).toBeTruthy();
    });

    test('Checkbox 2: Accept terms and conditions.', async ({}) => {
        await radioPageSteps.selectCheckbox(Checkbox.ACCEPT);
        expect(await radioPage.getCheckbox(Checkbox.ACCEPT).isChecked()).toBeTruthy();
    });
})
