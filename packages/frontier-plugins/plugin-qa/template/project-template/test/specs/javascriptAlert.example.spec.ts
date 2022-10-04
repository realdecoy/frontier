import {expect} from 'chai';
import JavaScriptAlertsPage from '@/page_objects/javascript-alerts-page';

describe('JavaScript Alerts', () => {
    it('can be accepted', async () => {
        await JavaScriptAlertsPage.open();
        await JavaScriptAlertsPage.clickForAlert;

        await browser.acceptAlert();
        let element = await JavaScriptAlertsPage.result;
        expect(element).to.eq('You successfully clicked an alert');
    });
});
