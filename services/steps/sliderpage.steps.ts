import { expect, Page } from "@playwright/test";
import SliderPage from '../pages/slider.page';

export default class SliderPageSteps {
    constructor(page: Page, sliderPage: SliderPage){
        this.page = page;
        this.sliderPage = sliderPage;
    }

    private page: Page;
    private sliderPage: SliderPage;

    async getNotificationMessage(){
        return await this.sliderPage.getNotificationBox().textContent();
    }

    async clickGetCountriesButton(){
        await this.sliderPage.getCountriesButton().click();
    }

    async moveSlider(targetValue: number){
        const maxValue = 50;
        const minValue = 1;
        const sliderHandle = this.sliderPage.getSliderHandler();
        const sliderBoundingBox = await sliderHandle.boundingBox();

        await sliderHandle.dragTo(sliderHandle, {
            force: true,
            targetPosition: {
                x: sliderBoundingBox.width * targetValue,
                y: 0,
            }
        })

    }

    async getWordLimitInformation(){
        return await this.sliderPage.getWordLimitInformation().textContent();
    }

}