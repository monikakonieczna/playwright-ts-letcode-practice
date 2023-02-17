import { Page } from "@playwright/test";
import FilePage from '../pages/file.page';

export default class FilePageSteps {
    constructor(page: Page, filePage: FilePage) {
        this.page = page;
        this.filePage = filePage;
    }

    private page: Page;
    private filePage: FilePage;

    async downloadExcel() {
        await this.filePage.getDownloadExcelButton().click();
    }

    async downloadPdf() {
        await this.filePage.getDownloadPdfButton().click();
    }

    async downloadText() {
        await this.filePage.getDownloadTextButton().click();
    }

}