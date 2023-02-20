import { Locator, Page } from "@playwright/test";
import * as selectors from '../../selectors.json';

export default class FilePage {
    constructor(page: Page) {
        this.page = page;
    }

    private page: Page;

    public getDownloadExcelButton(): Locator {
        return this.page.locator(selectors.filePage.downloadExcelButton);
    }

    public getDownloadPdfButton(): Locator {
        return this.page.locator(selectors.filePage.downloadPDFButton);
    }

    public getDownloadTextButton(): Locator {
        return this.page.locator(selectors.filePage.downloadTextButton);
    }
}