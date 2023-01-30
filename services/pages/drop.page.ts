import { Locator, Page } from "@playwright/test";
import * as selectors from '../../selectors.json';

export default class DropPage {
    constructor(page: Page){
        this.page = page;
    }

    private page: Page;

    public getSourceElement(): Locator {
        return this.page.locator(selectors.dropPage.sourceElement);
    }

    public getDestinationElement(): Locator {
        return this.page.locator(selectors.dropPage.destinationElement);
    }

    public getNotification(): Locator {
        return this.page.locator(selectors.dropPage.destinationMessage);
    }
}