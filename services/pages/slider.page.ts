import { Locator, Page } from "@playwright/test";
import * as selectors from '../../selectors.json';

export default class SliderPage {
    constructor(page: Page){
        this.page = page;
    }

    private page: Page;

    public getCountriesButton(): Locator {
        return this.page.locator(selectors.sliderPage.countriesButton);
    }

    public getSliderHandler(): Locator {
        return this.page.locator(selectors.sliderPage.sliderHandler);
    }

    public getNotificationBox(): Locator {
        return this.page.locator(selectors.sliderPage.notificationBox);
    }

    public getWordLimitInformation(): Locator {
        return this.page.locator(selectors.sliderPage.wordLimitInfo);
    }
}