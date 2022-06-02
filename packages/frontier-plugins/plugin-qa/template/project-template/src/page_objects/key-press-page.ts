import BasePage from './page'

class KeyPressPage extends BasePage {
    get open() {
        return browser.url('/key_presses');
    }

    get result() {
        return $('#result').getText();
    }

    submitKeyPress(value) {        
        return browser.keys(value);
    }
}

export default new KeyPressPage();
