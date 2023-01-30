import { Page } from "@playwright/test";
import AlertPage from '../pages/alert.page';

export default class AlertPageSteps {
    constructor(page: Page, alertPage: AlertPage){
        this.page = page;
        this.alertPage = alertPage;
    }

    private page: Page;
    private alertPage: AlertPage;

    async acceptSimpleAlertButton() {
        this.page.on("dialog", (dialog) => {
            dialog.accept();
        })
        await this.alertPage.getSimpleAlertButton().click();
    }
    async dismissAndPrintConfirmAlert() {
        this.page.on("dialog", (dialog) => {
            console.log(dialog.message());
            dialog.dismiss();
        })
        await this.alertPage.getConfirmAlertButton().click();
    }

    async typeTextAndAcceptAlert(message: string) {
        this.page.on("dialog", (dialog) => {
            dialog.accept(message);
        })
        await this.alertPage.getPromptAlertButton().click();
    }
    async closeModernAlert() {
        this.page.on("dialog", (dialog) => {
            dialog.accept();
        })
        await this.alertPage.getModernAlertButton().click();
    }

    async getNotificationMessage(){
        return await this.alertPage.getNotification().textContent();
    }

}