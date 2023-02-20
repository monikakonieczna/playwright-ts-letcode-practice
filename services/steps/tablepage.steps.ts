import { expect, Page, selectors } from "@playwright/test";
import TablePage from '../pages/table.page';

export default class TablePageSteps {
    constructor(page: Page, tablePage: TablePage){
        this.page = page;
        this.tablePage = tablePage;
    }

    private page: Page;
    private tablePage: TablePage;

    async getSumOfProductsPrices(){
        const list: number[] = await this.tablePage.getPriceList();
        let sum = 0;
        for( let i=0; i < list.length ; i++ ){
            sum += list[i];
        }
        return sum;
    }

    async getTotalPrice(){
        return (await this.tablePage.getTotalSum().textContent()).trim();
    }

    async sortDesserts(){
        await this.tablePage.getStortDessert();
    }


    async getData(){
        await this.tablePage.getSortableTable();
    }

}