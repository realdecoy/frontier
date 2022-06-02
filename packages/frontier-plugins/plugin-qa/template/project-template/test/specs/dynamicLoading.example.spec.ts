import {expect} from 'chai';
import DynamicLoadingPage from '@/page_objects/example-dynamic-loading-page';

describe('Dynamic loading', () => { 
    it('even when element is rendered after loading', async () => {
        DynamicLoadingPage.open;
        await DynamicLoadingPage.elementIsRenderedAfterLoading;
        await DynamicLoadingPage.start;
        await DynamicLoadingPage.waitUntilElementIsDisplayed();
        let element = await DynamicLoadingPage.finishText;

        expect(element).to.eq('Hello World!');
    });
});
