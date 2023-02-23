import { expect, Page } from "@playwright/test";
import FormPage from '../pages/form.page';

export default class FormPageSteps {
    constructor(page: Page, formPage: FormPage) {
        this.page = page;
        this.formPage = formPage;
    }

    private page: Page;
    private formPage: FormPage;


}