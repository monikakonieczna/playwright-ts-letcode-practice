import { Locator, Page } from "@playwright/test";
import * as selectors from '../../selectors.json';
import { Radio } from '../enums/radio.enum';
import { Checkbox } from '../enums/radio.enum';

export default class RadioPage {

    constructor(page: Page){
        this.page = page;
    }

    private page: Page;

    radioMap = new Map<Radio, string>([
        [Radio.FIRST_YES, selectors.radioPage.firstRadioYes],
        [Radio.FIRST_NO, selectors.radioPage.firstRadioNo],
        [Radio.SECOND_NO, selectors.radioPage.secondRadioNo],
        [Radio.SECOND_YES, selectors.radioPage.secondRadioYes],
        [Radio.THIRD_NO, selectors.radioPage.thirdRadioNo],
        [Radio.THIRD_YES, selectors.radioPage.thirdRadioYes],
        [Radio.FOO, selectors.radioPage.fourthRadioFoo],
        [Radio.BAR, selectors.radioPage.fourthRadioBar],
        [Radio.MAYBE, selectors.radioPage.fifthRadioMaybe],
    ]
    );

    checkboxMap = new Map<Checkbox, string>([
        [Checkbox.ACCEPT, selectors.radioPage.termsCheckbox],
        [Checkbox.REMEMEBER_ME, selectors.radioPage.rememberCheckbox]
    ]
    );

    public getRadio(element: Radio): Locator {
        return this.page.locator(this.radioMap.get(element));
    }

    public getCheckbox(element: Checkbox): Locator {
        return this.page.locator(this.checkboxMap.get(element));
    }


}