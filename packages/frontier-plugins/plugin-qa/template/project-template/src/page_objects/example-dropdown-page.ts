import BasePage from './page'

class DropdownPage extends BasePage {
    open() {
        return browser.url('/dropdown');
    }

    get dropdownElement() {
        return $('#dropdown');
    }
}

export default new DropdownPage();
