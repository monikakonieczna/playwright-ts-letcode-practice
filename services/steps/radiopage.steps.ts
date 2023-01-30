import { Page } from "@playwright/test";
import RadioPage from '../pages/radio.page';
import { Radio } from '../enums/radio.enum';
import { Checkbox } from '../enums/radio.enum';

export default class RadioPageSteps {

    constructor(page: Page, radioPage: RadioPage){
        this.page = page;
        this.radioPage = radioPage;
    }

    private page: Page;
    private radioPage: RadioPage;

    async selectRadio(radio: Radio){
        await this.radioPage.getRadio(radio).check();
    }

    async selectCheckbox(checkbox: Checkbox){
        await this.radioPage.getCheckbox(checkbox).check();
    }


}