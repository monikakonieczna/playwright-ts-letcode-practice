import { Locator, Page } from "@playwright/test";
import * as selectors from '../../selectors.json';

export default class HomePage {
    constructor(page: Page){
        this.page = page;
    }

    private page: Page;

    public getInputLink(): Locator {
        return this.page.locator(selectors.homePage.inputLink);
    }

    public getSelectLink(): Locator {
        return this.page.locator(selectors.homePage.selectLink);
    }

    public getAlertLink(): Locator {
        return this.page.locator(selectors.homePage.alertLink);
    }

    public getRadioLink(): Locator {
        return this.page.locator(selectors.homePage.radioLink);
    }

    public getWindowLink(): Locator {
        return this.page.locator(selectors.homePage.windowLink);
    }

    public getDropLink(): Locator {
        return this.page.locator(selectors.homePage.dropLink);
    }

    public getSliderLink(): Locator {
        return this.page.locator(selectors.homePage.sliderLink);
    }

    public getTableLink(): Locator {
        return this.page.locator(selectors.homePage.tableLink);
    }

    public getFileLink(): Locator {
        return this.page.locator(selectors.homePage.fileLink);
    }
    public getFormLink(): Locator {
        return this.page.locator(selectors.homePage.formLink);
    }
}