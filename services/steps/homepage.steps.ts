import { Page } from "@playwright/test";
import HomePage from '../pages/home.page';

export default class HomePageSteps {
    constructor(page: Page, homePage: HomePage) {
        this.page = page;
        this.homePage = homePage;
    }

    private page: Page;
    private homePage: HomePage;

    async navigateToInputPage() {
        await this.homePage.getInputLink().click();
    }
    async navigateToSelectPage() {
        await this.homePage.getSelectLink().click();
    }
    async navigateToAlertPage() {
        await this.homePage.getAlertLink().click();
    }
    async navigateToRadioPage() {
        await this.homePage.getRadioLink().click();
    }
    async navigateToWindowPage() {
        await this.homePage.getWindowLink().click();
    }
    async navigateToDropPage() {
        await this.homePage.getDropLink().click();
    }
    async navigateToSliderPage() {
        await this.homePage.getSliderLink().click();
    }
    async navigateToTablePage() {
        await this.homePage.getTableLink().click();
    }
    async navigateToFilePage() {
        await this.homePage.getFileLink().click();
    }
    async navigateToFormPage() {
        await this.homePage.getFormLink().click();
    }


}