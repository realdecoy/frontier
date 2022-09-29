import {expect} from 'chai';
import KeyPressPage from '@/page_objects/key-press-page';

describe('Key Presses', () => {
    it('can be performed using .keys()', async() => {
        const keyValue = 'Enter';

        await KeyPressPage.open();
        await KeyPressPage.submitKeyPress(keyValue);
        let element = await KeyPressPage.result;
        expect(element).to.eq(`You entered: ${keyValue.toUpperCase()}`);
    });
});
