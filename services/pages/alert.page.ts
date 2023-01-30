import { Locator, Page } from "@playwright/test";
import * as selectors from '../../selectors.json';

export default class AlertPage {
    constructor(page: Page){
        this.page = page;
    }

    private page: Page;

    public getSimpleAlertButton(): Locator {
        return this.page.locator(selectors.alertPage.simpleAlertButton);
    }

    public getConfirmAlertButton(): Locator {
        return this.page.locator(selectors.alertPage.confirmAlertButton);
    }

    public getPromptAlertButton(): Locator {
        return this.page.locator(selectors.alertPage.promptAlertButton);
    }

    public getModernAlertButton(): Locator {
        return this.page.locator(selectors.alertPage.modernAlertButton);
    }

    public getNotification(): Locator {
        return this.page.locator(selectors.alertPage.notification);
    }

}