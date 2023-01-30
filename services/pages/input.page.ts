import { Locator, Page } from "@playwright/test";
import * as selectors from '../../selectors.json';
import { Input } from '../enums/input.enum';

export default class InputPage {
    constructor(page: Page){
        this.page = page;
    }

    private page: Page;

    inputMap = new Map<Input, string>([
        [Input.APPENDED_TEXT, selectors.inputPage.appeendInput],
        [Input.CLEAR_TEXT, selectors.inputPage.clearTextInput],
        [Input.EDIT_FIELD, selectors.inputPage.editFieldInput],
        [Input.FULLNAME, selectors.inputPage.nameInput],
        [Input.READONLY, selectors.inputPage.readonlyInput],
        [Input.TEXTBOX, selectors.inputPage.textboxInput],
    ]
    );

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
        return this.page.locator(this.inputMap.get(element));
    }
    
}