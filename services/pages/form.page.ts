import { Locator, Page } from "@playwright/test";
import * as selectors from '../../selectors.json';
import { Input } from '../enums/input.enum';
import { Radio } from '../enums/radio.enum';

export default class FormPage {
    constructor(page: Page) {
        this.page = page;
    }

    private page: Page;

    inputMap = new Map<Input, string>([
        [Input.FORM_FIRSTNAME, selectors.formPage.firstnameInput],
        [Input.FORM_LASTNAME, selectors.formPage.lastnameInput],
        [Input.FORM_EMAIL, selectors.formPage.emailInput],
        [Input.FORM_PHONE, selectors.formPage.phoneNumberInput],
        [Input.FORM_ADDRESS1, selectors.formPage.addressLine1Input],
        [Input.FORM_ADDRESS2, selectors.formPage.addressLine2Input],
        [Input.FORM_STATE, selectors.formPage.stateInput],
        [Input.FORM_POSTALCODE, selectors.formPage.postalCodeInput],
    ]
    );

    radioMap = new Map<Radio, string>([
        [Radio.FORM_FEMALE, selectors.formPage.genderFemaleRadio],
        [Radio.FORM_MALE, selectors.formPage.genderMaleRadio],
        [Radio.FORM_TRANSGENDER, selectors.formPage.genderTransgenderRadio]
    ]);

    public getInput(element: Input): Locator {
        return this.page.locator(this.inputMap.get(element));
    }
    public getFirstnameInput(): Locator {
        return this.page.locator(selectors.formPage.firstnameInput);
    }
    public getLastnameInput(): Locator {
        return this.page.locator(selectors.formPage.lastnameInput);
    }
    public getEmailInput(): Locator {
        return this.page.locator(selectors.formPage.emailInput);
    }
    public getCountryCodeSelect(): Locator {
        return this.page.locator(selectors.formPage.countrySelect);
    }
    public getPhoneNumberInput(): Locator {
        return this.page.locator(selectors.formPage.phoneNumberInput);
    }
    public getAddressLine1Input(): Locator {
        return this.page.locator(selectors.formPage.addressLine1Input);
    }
    public getAddressLine2Input(): Locator {
        return this.page.locator(selectors.formPage.addressLine2Input);
    }
    public getStateInput(): Locator {
        return this.page.locator(selectors.formPage.stateInput);
    }
    public getPostalCodeInput(): Locator {
        return this.page.locator(selectors.formPage.postalCodeInput);
    }
    public getCountrySelect(): Locator {
        return this.page.locator(selectors.formPage.countryCodeSelect);
    }
    public getDateOfBirthCalendar(): Locator {
        return this.page.locator(selectors.formPage.dateOfBirthCalendar);
    }

    public getRadio(radio: Radio) {
        return this.page.locator(this.radioMap.get(radio));
    }
    public getTermsCheckbox(): Locator {
        return this.page.locator(selectors.formPage.termsCheckbox);
    }
    public getSubmitButton(): Locator {
        return this.page.locator(selectors.formPage.submitButton);
    }
    public async fillDate(date: string) {
        await this.page.fill(selectors.formPage.dateOfBirthCalendar, date)
    }
}