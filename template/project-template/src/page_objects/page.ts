/**
* Main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {
  /**
    * Opens a sub page of the page
    * @param {string} path of the sub page (e.g. /path/to/page.html)
    * @returns {string} This returns the base path
    */
  open(path: string) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`)
  }
}
