import { Locator, Page } from "@playwright/test";
import * as selectors from '../../selectors.json';
import { Select } from '../enums/select.enum';

export default class SelectPage {
    constructor(page: Page){
        this.page = page;
    }

    private page: Page;

    selectMap = new Map<Select, string>([
        [Select.FRUIT, selectors.selectPage.fruitsSelect],
        [Select.COUNTRY, selectors.selectPage.countrySelect],
        [Select.LANGUAGE, selectors.selectPage.languageSelect],
        [Select.HERO, selectors.selectPage.superherosSelect]
    ]
    );

    public getFruitNotification(): Locator{
        return this.page.locator(selectors.selectPage.fruitNotification);
    }
    
    public getNotification(): Locator{
        return this.page.locator(selectors.selectPage.notification);
    }

    public getSelect(select: Select): Locator {
        
        return this.page.locator(this.selectMap.get(select));

    }

    public async getSelectedValue(select: Select){
        return await this.page.$eval<string, HTMLSelectElement>("#country", e => e.nodeValue);
    }

    
}