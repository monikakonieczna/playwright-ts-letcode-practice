import { test, expect } from '@playwright/test';
import HomePage from '../services/pages/home.page';
import HomePageSteps from '../services/steps/homepage.steps';
import SelectPage from '../services/pages/select.page';
import SelectPageSteps from '../services/steps/selectpage.steps';
import { Select } from '../services/enums/select.enum';

test.describe('Interactions with dropdown element. @select', () => {

    let homePage: HomePage;
    let homePageSteps: HomePageSteps;

    let selectPage: SelectPage;
    let selectPageSteps: SelectPageSteps;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        homePageSteps = new HomePageSteps(page, homePage);

        await page.goto('https://letcode.in/test', {
            waitUntil: 'networkidle',
        });

        await homePageSteps.navigateToSelectPage();
        selectPage = new SelectPage(page);
        selectPageSteps = new SelectPageSteps(page, selectPage);
    });

    test('Task 1: Select the apple using visible text', async ({page}) => {

        await selectPageSteps.selecttByLabel("Apple", Select.FRUIT);
        expect

    
    });

    test('Task 2: Select Black Panther', async ({page}) => {
    
    });

    test('Task 3: Select the last programming language and print all the options', async ({page}) => {
    
    });

    test('Task 4: Select India using value & print the selected value', async ({page}) => {
    
    });
})