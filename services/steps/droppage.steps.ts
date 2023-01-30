import { Page } from "@playwright/test";
import DropPage from '../pages/drop.page';

export default class DropPageSteps {
    constructor(page: Page, dropPage: DropPage){
        this.page = page;
        this.dropPage = dropPage;
    }

    private page: Page;
    private dropPage: DropPage;

    async getDestinationMessage(){
        return await this.dropPage.getNotification().textContent();
    }

    async dragAndDrop(){
        const sourceBound = await this.dropPage.getSourceElement().boundingBox();
        const destinationBound = await this.dropPage.getDestinationElement().boundingBox();

        await this.page.mouse.move(sourceBound.x + sourceBound.width /2, sourceBound.y + sourceBound.height / 2);
        await this.page.mouse.down();
        await this.page.mouse.move(destinationBound.x + destinationBound.width / 2, destinationBound.y + destinationBound.height / 2);
        await this.page.mouse.up();

    }

}