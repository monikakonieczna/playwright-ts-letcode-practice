import { Locator, Page } from "@playwright/test";
import * as selectors from '../../selectors.json';
import { Input } from '../enums/input.enum';

export default class InputPage {
    constructor(page: Page){
        this.page = page;
    }

    private page: Page;

    public getNameInput(): Locator {
        return this.page.locator(selectors.inputPage.nameInput);
    }

    public getAppendInput(): Locator {
        return this.page.locator(selectors.inputPage.appeendInput);
    }

    public getTextBoxInput(): Locator {
        return this.page.locator(selectors.inputPage.textboxInput);
    }

    public getClearTextInput(): Locator {
        return this.page.locator(selectors.inputPage.clearTextInput);
    }

    public getEditFieldInput(): Locator {
        return this.page.locator(selectors.inputPage.editFieldInput);
    }

    public getReadonlyInput(): Locator {
        return this.page.locator(selectors.inputPage.readonlyInput);
    }

    public getInput(element: Input): Locator {
        switch(element) {
            case Input.FULLNAME: {
                return this.page.locator(selectors.inputPage.nameInput);
            }
            case Input.APPENDED_TEXT: {
                return this.page.locator(selectors.inputPage.appeendInput);
            }
            case Input.TEXTBOX: {
                return this.page.locator(selectors.inputPage.textboxInput);
            }
            case Input.CLEAR_TEXT: {
                return this.page.locator(selectors.inputPage.clearTextInput);
            }
            case Input.EDIT_FIELD: {
                return this.page.locator(selectors.inputPage.editFieldInput);
            }
            case Input.EDIT_FIELD: {
                return this.page.locator(selectors.inputPage.editFieldInput);
            }
            case Input.READONLY: {
                return this.page.locator(selectors.inputPage.readonlyInput);
            }
        }
    }
}