
// All imports go here

// Importing Base Page Object
import page from './page-object';

/**
 * Page containing specific selectors and methods for a specific page
 */
class <PageObject> extends page {
  /**
     * Selectors
     * Define selectors in this section using getter methods
     */

    /**
     * Functions
     * Define functions for different methods that can be carried out on the page
     */

}

// Module Exports

const <page_object_name> = new <PageObject>();

export { <page_object_name> as default,  <page_object_name> as <PageObject> }

