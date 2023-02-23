import { Locator, Page } from "@playwright/test";
import * as selectors from '../../selectors.json';

export default class FormPage {
    constructor(page: Page) {
        this.page = page;
    }

    private page: Page;

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
    public getGenderFemaleRadio(): Locator {
        return this.page.locator(selectors.formPage.genderFemaleRadio);
    }
    public getGenderMaleRadio(): Locator {
        return this.page.locator(selectors.formPage.genderMaleRadio);
    }
    public getGenderTransRadio(): Locator {
        return this.page.locator(selectors.formPage.genderTransgenderRadio);
    }
    public getTermsCheckbox(): Locator {
        return this.page.locator(selectors.formPage.termsCheckbox);
    }
    public getSubmitButton(): Locator {
        return this.page.locator(selectors.formPage.submitButton);
    }
}