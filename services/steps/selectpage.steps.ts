import { Locator, Page } from "@playwright/test";
import SelectPage from '../pages/select.page';
import { Select } from '../enums/select.enum';

export default class SelectPageSteps {
    constructor(page: Page, selectPage: SelectPage){
        this.page = page;
        this.selectPage = selectPage;
    }

    private page: Page;
    private selectPage: SelectPage;

    async selectByValue(value: string, select: Select) {
        const dropdown = this.selectPage.getSelect(select);
        await dropdown.selectOption(value);
    }

    async selectByIndex(index: number, select: Select) {
        const dropdown = this.selectPage.getSelect(select);
        await dropdown.selectOption({index: index});
    }

    async selecttByLabel(label: string, select: Select) {
        const dropdown = this.selectPage.getSelect(select);
        await dropdown.selectOption({label: label});
    }

    async selectTwoHeroes(label: string, label2: string){
        const heroes = this.selectPage.getSelect(Select.HERO);
        await heroes.selectOption([
            {label: label},
            {label: label2}
        ]);
    }

    async printSelectCount(select: Select) {
        const dropdown = this.selectPage.getSelect(select);
        console.log(await dropdown.count());
    }

    async printSelectedValue(select: Select){
        const text = await this.selectPage.getSelectedValue();
        console.log(text);
    }

}