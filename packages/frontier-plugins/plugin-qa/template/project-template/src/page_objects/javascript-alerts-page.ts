import BasePage from './page'

class JavaScriptAlertsPage extends BasePage {
    open() {
        return browser.url('/javascript_alerts');
    }

    get clickForAlert() {
        return browser.$('button=Click for JS Alert').click();
    }

    get result() {
        return $('#result').getText();
    }
}

export default new JavaScriptAlertsPage();
