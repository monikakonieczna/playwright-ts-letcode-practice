import { test, expect } from '@playwright/test';
import * as data from '../test-data/input.json';
import HomePage from '../services/pages/home.page';
import HomePageSteps from '../services/steps/homepage.steps';
import InputPage from '../services/pages/input.page';
import InputPageSteps from '../services/steps/inputpage.steps';
import { Input } from '../services/enums/input.enum';

test.describe('Interactions with inputs elements. @input', () => {

    let homePage: HomePage;
    let homePageSteps: HomePageSteps;

    let inputPage: InputPage;
    let inputPageSteps: InputPageSteps;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        homePageSteps = new HomePageSteps(page, homePage);

        await page.goto('https://letcode.in/test', {
            waitUntil: 'networkidle',
        });

        await homePageSteps.navigateToInputPage();
        inputPage = new InputPage(page);
        inputPageSteps = new InputPageSteps(page, inputPage);
    });

    test('Task 1: Enter your full name', async ({}) => {
        await inputPageSteps.enterFullName(data.name);
        //expect(inputPageSteps.getTextFromInput(Input.FULLNAME)).toBe(data.name);
    });
    
    test('Task 2: Append a text and press keyboard tab', async ({}) => {
        await inputPageSteps.appendText(data.appendText);
        expect(await inputPageSteps.getTextFromInput(Input.APPENDED_TEXT)).toBe("I am good");
    });

    test('Task 3: What is inside the text box', async ({}) => {
        expect(await inputPageSteps.getTextFromInput(Input.TEXTBOX)).toBe("ortonikc");
    });

    test('Task 4: Clear the text', async ({}) => {
        await inputPageSteps.clearText(Input.CLEAR_TEXT);
    });

    test('Task 5: Confirm edit field is disabled', async ({}) => {
        expect(await inputPageSteps.isDisabled(Input.EDIT_FIELD)).toBe(true);
    });

    test('Task 6: Confirm text is readonly', async ({}) => {
        expect(await inputPageSteps.isEditable(Input.READONLY)).toBe(false);
    });
})
