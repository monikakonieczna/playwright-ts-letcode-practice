import { test, expect } from '@playwright/test';
import HomePage from '../services/pages/home.page';
import HomePageSteps from '../services/steps/homepage.steps';
import SelectPage from '../services/pages/select.page';
import SelectPageSteps from '../services/steps/selectpage.steps';
import { Select } from '../services/enums/select.enum';
import { Notification } from '../services/enums/notification.enum';

test.describe('Interactions with dropdown element. @select', () => {

    let homePage: HomePage;
    let homePageSteps: HomePageSteps;

    let selectPage: SelectPage;
    let selectPageSteps: SelectPageSteps;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        homePageSteps = new HomePageSteps(page, homePage);

        await page.goto('', {
            waitUntil: 'networkidle',
        });

        await homePageSteps.navigateToSelectPage();
        selectPage = new SelectPage(page);
        selectPageSteps = new SelectPageSteps(page, selectPage);
    });

    test('Task 1: Select the apple using visible text', async ({}) => {

        //Select the apple using visible text
        await selectPageSteps.selecttByLabel("Apple", Select.FRUIT);

        //Verify that Apple has been selected by checking notification message
        let expectedText: string = "You have selected Apple";
        let text = await selectPageSteps.getNotificationMessage(Notification.FRUIT_NOTIFICATION);
        expect(text).toBe(expectedText);

    
    });

    test('Task 2: Select Black Panther', async ({}) => {
    
        //Select Black Panter hero
        await selectPageSteps.selectByValue("bp", Select.HERO);

        //Verify that Black Panter has been selected by checking notification message
        let expectedText: string = "You have selected Black Panther";
        let text = await selectPageSteps.getNotificationMessage(Notification.GENERAL_NOTIFICATION);
        expect(text).toBe(expectedText);

    });

    test('Task 3: Select the last programming language and print all the options', async ({}) => {
        //Select the last programming language
        let langCounter: any = await selectPageSteps.getSelectCount(Select.LANGUAGE);
        await selectPageSteps.selectByIndex((langCounter - 1), Select.LANGUAGE);

        //Verify that C# has been selected by checking notification message
        let expectedText: string = "You have selected C#";
        let text = await selectPageSteps.getNotificationMessage(Notification.GENERAL_NOTIFICATION);
        expect(text).toBe(expectedText);
    });

    test('Task 4: Select India using value', async ({page}) => {
    
        //Select India country
        await selectPageSteps.selectByValue("India", Select.COUNTRY);

        //todo: Verify that Indie was chosen

    });
})