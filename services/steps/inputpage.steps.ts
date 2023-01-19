import { Locator, Page } from "@playwright/test";
import InputPage from '../pages/input.page';
import { Input } from '../enums/input.enum';

export default class InputPageSteps {
    constructor(page: Page, inputPage: InputPage){
        this.page = page;
        this.inputPage = inputPage;
    }

    private page: Page;
    private inputPage: InputPage;

    async enterFullName(name: string) {
        await this.inputPage.getNameInput().type(name);
    }

    /*
    async appendText(text: string){
        const locator = this.inputPage.getAppendInput();
        await locator.focus();
        await this.page.keyboard.press("End");
        await locator.type(text);
    }
    */

    async appendText(text: string){
        const element = this.inputPage.getAppendInput();
        const existingValue = await element.getAttribute("value");
        await element.fill(existingValue + text);
    }

    async getTextFromInput(input: Input){
        return await this.inputPage.getInput(input).getAttribute("value");
    }

    async clearText(input: Input){
        await this.inputPage.getInput(input).fill("");
    }

    async isDisabled(input: Input){
        return await this.inputPage.getInput(input).isDisabled();
    }

    async isEditable(input: Input){
        return await this.inputPage.getInput(input).isEditable();
    }
}