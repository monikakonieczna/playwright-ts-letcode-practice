import { test, expect } from '@playwright/test';
import HomePage from '../services/pages/home.page';
import HomePageSteps from '../services/steps/homepage.steps';
import SliderPage from '../services/pages/slider.page';
import SliderPageSteps from '../services/steps/sliderpage.steps';


test.describe('Executing slider movement from a range thorough drag-and-drop interaction. @slider', () => {

    let homePage: HomePage;
    let homePageSteps: HomePageSteps;

    let sliderPage: SliderPage;
    let sliderPageSteps: SliderPageSteps;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        homePageSteps = new HomePageSteps(page, homePage);

        await page.goto('https://letcode.in/test');

        await homePageSteps.navigateToSliderPage();
        sliderPage = new SliderPage(page);
        sliderPageSteps = new SliderPageSteps(page, sliderPage);
    });

    test('Move the slider to word limit 1.', async ({}) => {
        const expectedText = "Afghanistan";

        await sliderPageSteps.moveSlider(0.02);
        await sliderPageSteps.clickGetCountriesButton();
        const text = await sliderPageSteps.getNotificationMessage();
        expect(text).toEqual(expectedText);
    });
})