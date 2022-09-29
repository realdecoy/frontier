import {expect} from 'chai';
import DropdownPage from '@/page_objects/example-dropdown-page'

describe('Dropdown', () => {
    it('can be set using selectByVisibleText', async () => {
        await DropdownPage.open();
        await DropdownPage.dropdownElement.selectByVisibleText('Option 2');
        let element = await DropdownPage.dropdownElement.getValue();
        expect(element).to.eq('2');
    });

    it ('can be set using selectByAttribute',async () => {
        await DropdownPage.open();
        let dropDown =  await DropdownPage.dropdownElement;
        await dropDown.selectByAttribute('value', '1');
        let value = await DropdownPage.dropdownElement.getValue()
        expect(value).to.eq('1');
    });

    it ('can be set using selectByIndex', async () => {
        await DropdownPage.open();
        await DropdownPage.dropdownElement.selectByIndex(2);    
        let element = await DropdownPage.dropdownElement.getValue();
        expect(element).to.eq('2');
    });
});
