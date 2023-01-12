
// All imports go here

// Importing Base Screen Object
import screen from './app-screen';

/**
 * Page containing specific selectors and methods for a specific page
 */
class <ScreenObject> extends screen {
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

const <screen_object_name> = new <ScreenObject>();

export { <screen_object_name> as default,  <screen_object_name> as <ScreenObject> }
