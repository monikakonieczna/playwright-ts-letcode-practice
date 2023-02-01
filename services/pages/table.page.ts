import { Locator, Page } from "@playwright/test";
import * as selectors from '../../selectors.json';
import { Product } from "../enums/product.enum";

export default class TablePage {
    constructor(page: Page){
        this.page = page;
    }

    private page: Page;

    public async getPriceList() {

        let priceList = [];

        const rowCount:number  = await this.getShoppingList().locator('tr').count();

        for (let i=0; i<rowCount; i++){
            priceList.push(Number((await this.page.locator(selectors.tablePage.shoppingList).locator('tr').nth(i).locator('td').last().textContent()).trim()));
        }
        return priceList;
    }
    public getAttendanceListTable(): Locator {
        return this.page.locator(selectors.tablePage.attendanceList);
    }
    public getShoppingList(): Locator {
        return this.page.locator(selectors.tablePage.shoppingList);
    }
    public getSortableTable(): Locator {
        return this.page.locator(selectors.tablePage.sortableTable);
    }

    public getTotalSum(): Locator {
        return this.page.locator(selectors.tablePage.totalPrice);
    }

}