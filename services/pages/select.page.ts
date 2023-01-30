import { Locator, Page } from "@playwright/test";
import * as selectors from '../../selectors.json';
import { Select } from '../enums/select.enum';
import { Notification } from '../enums/notification.enum';

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

    notificationMap = new Map<Notification, string>([
        [Notification.FRUIT_NOTIFICATION, selectors.selectPage.fruitNotification],
        [Notification.GENERAL_NOTIFICATION, selectors.selectPage.notification]
    ]
    );

    public getNotification(notification: Notification): Locator{
        return this.page.locator(this.notificationMap.get(notification));
    }

    public getSelect(select: Select): Locator {
        return this.page.locator(this.selectMap.get(select));
    }

    public async getCountedOptions(select: Select): Promise<number>{
        const options = await this.page.$$eval(this.selectMap.get(select)+" option", (e) => {
            return e.map(option => option.textContent)
        });
        console.log(options.length);
        return options.length;
    }

    public async getSelectedValue(select: Select): Promise<string>{
        return await this.page.$eval<string, HTMLSelectElement>(this.selectMap.get(select), e => e.nodeValue);
    }

    
}