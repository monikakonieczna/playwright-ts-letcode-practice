import { expect, Page } from "@playwright/test";
import FormPage from '../pages/form.page';
import { Input } from '../enums/input.enum';
import { Radio } from '../enums/radio.enum';

export default class FormPageSteps {
    constructor(page: Page, formPage: FormPage) {
        this.page = page;
        this.formPage = formPage;
    }

    private page: Page;
    private formPage: FormPage;

    async enterText(input: Input, text: string) {
        await this.formPage.getInput(input).fill("");
        await this.formPage.getInput(input).type(text);
    }

    async selectCountryCode(code: string) {
        const dropdown = this.formPage.getCountrySelect();
        await dropdown.selectOption({ 'label': 'Armenia (+374)' });
    }

    async selectCountry() {
        const dropdown = this.formPage.getCountrySelect();
        await dropdown.selectOption({ 'label': 'Armenia (+374)' });
    }

    async selectDate(date: string) {
        await this.formPage.fillDate(date);
    }

    async selectRadio(radio: Radio) {
        await this.formPage.getRadio(radio).check();
    }

    async selectRandomRadio(num: number) {
        
        await this.formPage.getRadio(radio).check();
    }
}