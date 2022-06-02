 import BasePage from './page'

/**
 * Sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
  /**
     * Selectors
     * Define selectors in this section using getter methods
     */
  get inputUsername() {
    return $('#username')
  }

  get inputPassword() {
    return $('#password')
  }
  
  get btnSubmit () { 
    return $('button[type="submit"]');
  }

  get flash() {
    return $('#flash').getText();
}

  // Functions

  /**
     * Login on the page using a username and password
     * @param {string} username .
     * @param {string}  password .
     */
  async loginWithCredentials(username: string, password: string) {
    this.inputUsername.setValue(username)
    this.inputPassword.setValue(password)
    this.btnSubmit.click()
  }

}

export default new LoginPage();
