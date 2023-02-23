import { expect, Page } from "@playwright/test";
import FilePage from '../pages/file.page';

export default class FilePageSteps {
    constructor(page: Page, filePage: FilePage) {
        this.page = page;
        this.filePage = filePage;
    }

    private page: Page;
    private filePage: FilePage;

    async downloadExcel() {
        const [download] = await Promise.all(
            [
                this.page.waitForEvent('download'),
                this.filePage.getDownloadExcelButton().click(),
            ])

        const suggestedFileName = download.suggestedFilename();
        const filePath = 'download/' + suggestedFileName;
        await download.saveAs(filePath);
        return [filePath, suggestedFileName];

    }

    async downloadPdf() {
        const [download] = await Promise.all(
            [
                this.page.waitForEvent('download'),
                this.filePage.getDownloadPdfButton().click(),
            ])

        const suggestedFileName = download.suggestedFilename();
        const filePath = 'download/' + suggestedFileName;
        await download.saveAs(filePath);
        return [filePath, suggestedFileName];
    }

    async downloadText() {
        const [download] = await Promise.all(
            [
                this.page.waitForEvent('download'),
                this.filePage.getDownloadTextButton().click(),
            ])

        const suggestedFileName = download.suggestedFilename();
        const filePath = 'download/' + suggestedFileName;
        await download.saveAs(filePath);
        return [filePath, suggestedFileName];
    }

}