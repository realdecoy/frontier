/**
* Main screen object containing all methods, selectors and functionality
* that is shared across all page objects
*/

export default class AppScreen {
    private selector: string;
    /**
     * Constructor method to initialize this screen object.
     * @param selector 
     */
    constructor (selector: string) {
        this.selector = selector;
    }

    // --------------------------------------------------------------------------
    // Functions
    // --------------------------------------------------------------------------

    /**
     * Wait for the login screen to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown (isShown: boolean = true): Promise<boolean | void> {
        return $(this.selector).waitForDisplayed({
            reverse: !isShown,
        });
    }
}