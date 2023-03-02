# Rdvue Features

This section will provide a brief introduction to generating features inside a project. We provide two examples, namely generating a Page and a Component. Each available feature has a dedicated section in our documentation.

Reading through this section will get you comfortable with the CLI. An in depth look at the command used in this section, along with all available commands, can be found in [CLI Commands](cli-reference.md#add). 

<br/>
> It is recommended to read through the [CLI Reference](cli-reference.md#add) before continuing with this document.


* * *


## Components

Components are independent and reusable bits of code. They include the functional logic of the component along with styling and are imported by [Screens](#screens) and [Layout](#layouts). Unlike Screens, Components are never used in Nagivation. That would deviate from our development style guide.

### Usage

```bash
$ frontier mobile:add:component <component-name>

# Example
$ frontier mobile:add:component fancy-text
```

### Technical

A Component folder consists of for two files. These file include:

*   \[component\]**.tsx**: This file holds actual functional logic and view hierarchy for the component you are trying to create..
    

*   \[component\]**.styles.tsx**: This contains the styling of the component. It is an abstraction similar to CSS StyleSheets with some of the attribute but not all. 

See below for example of folder structure after creating a component called `fancy-text`:

<image src="https://github.com/realdecoy/frontier/tree/mobile-integration/packages/frontier-plugins/plugin-mobile/docs/images/component.png"> 


**Example**

Below is an example of a component called `fancy-text.tsx`

```tsx
// @/component/fancy-text/fancy-text.tsx

import { Component } from "react";
import styles from "./fancy-text.styles";

class FancyText extends Component {
  render() {
    return <Text style={styles.title}>Some Fancy Text</Text>
  }
}

```

This is an example of the stylesheet `fancy-text.styles.tsx`.

```tsx
// @/component/fancy-text/fancy-text.style.tsx

import { StyleSheet } from "react-native";

export StyleSheet.create({
    text: {
      color: "red",
      fontSize: 18,
    }
  });
};
```

### Choosing between Class and Function components

There are two ways in which components can be create in React / React Native. We can use Class or Function based components. Function based components are generally quicker to create for simple use cases. However, as the components get more complicated and require more logic Class based components make this a bit easier to work with. Here are some reasons how to help make your decision a bit easier.

**When to choose Class-Based components:**

1. If you want to work with components lifecycle functions - Even though react provides hooks like `useEffect()`, this can get quite cumbersome when the components grows.

2. If you are creating a [Screen](#screens).

3. If you are creating a [Context Provider](#stores--context).

4. If your component has a lot a **state** variables - A general rule of thump is to keep state variable count at a max of 5.

5. If your component has a lot a **props** variables - A general rule of thump is to keep props variable count at a max of 5.

6. If you intend on making API calls from within the component.

**When to choose Function-Based components:**

1. If the component is mostly visual with little to no functional logic.


Applying these to your development are not aim at providing technical benefit (for most scenarios) but these will help to ensure the code is more readable and easier to adapt for new developers.


* * *


## Screens

A Screen is a conceptual grouping for React Native Components used in nagivation. Technically a screen is a component but in order to standardize how we work with react we want you to think of screen as its own thing. Screen are **not** to be imported by other Screen, Components or Layouts.

A Screen needs to be added to the [Navigator](#nagivation) before it can be used within a mobile application.
### Usage

```bash
$ frontier mobile:add:screen <screen-name>

# Example
$ frontier mobile:add:screen login
```
### Technical

Each generated Screen is contained within it's own sub-folder within the **src/screens** directory. The directory contains the following files which each carry out a specific role in developing a Screen:

*   \[screen\].**tsx**: This is similar to a [Component](#component) but this is generally where we make API calls to fetch data to populate the views and import other components. Screen are also used within navigation. 

    
*   \[screen\].**styles.tsx**: All Stylesheet file are the same as the stylesheet used shown in [Component](#component).
    

***

RDvue provides an elegant way for generating features.

## Services

Services are focused classed designed to interact with web API endpoints. As a good design pattern a service should:

*   only interact with a single domain
    
*   only provide features from the domain which are relevant to the theme of the service. Eg. A user service should be focused on methods support such; adding order related data would make for poor encapsulation.
    

### Technical

*   While each generated service resides in its own file and class, all services extend a predefined BaseService class in order to provide centralized functionality.
    
*   Each service is able to specify a unique web API endpoint with which to interact - or none at all for services providing local functionality (Eg. wrapper storage mechanism over LocalStorage).
    
*   Each service has access to the following protected memebers:
    

| **Member**                                     | **Description**                                                                                                                      |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| api (field)  <br>type: Axios                   | Helper to invoke web APIs. Individual service methods need only specify their endpoint paths relative to the registered root domain. |
| onRequest(request: AxiosRequestConfig) => void | Invoked before requests are sent to the web API endpoint.                                                                            |
| onResponse(response: AxiosResponse) => void    | Invoked before responses are handled by a Service’s methods.                                                                         |
| onError(data: any)                             | Invoked for errors during request or response.                                                                                       |

## Pages

A Page is a conceptual grouping for Vue Components used in routing. Pages are **not** to be imported by other Pages, Components or Layouts.

A special feature of Pages are that they can benefit from Layouts to automatically add a parent container with common pieces of UI/State that’s shared throughout the application - like Headers and Footers. The [Layouts](#layouts) section goes into more detail on this approach.

?> A Page needs to be added to the [Router](#routing) before it can be previewed within a web browser.

### Technical

Each generated context is contained within the sub-folder `src/contexts` directory. The context will provide high order functions that will help you to inject global state within you Class based components. It will also provide you will hooks for you to use in your function based components.

*   \[page\].**vue**: This contains the Vue template markup used to implement the structure and layout of a Page. It is a mix of HTML and special Vue syntaxes which allow declarative databinding and structural manipulation.
    
*   \[page\].**ts**: This contains the TypeScript controller which provides the procedural code-behind logical needed to add integrations to a page. Through this file you may expose data and handle events generated by Page elements.
    
*   \[page\].**scss**: This contains the SASS stylesheet to be applied to the page - and that page only. The styles within this file are scoped, meaning they cannot be used to target any elements except those defined directly within the \[page\].vue template file.
    

?> Scoped CSS may seem weird at first because regular CSS operates with global impunity, however it is a great approach for compartmentalizing styles so they do not jump their intended scope and affect other elements. Global level styles can be added in the Theme directory.

*   \[page\].**spec.ts**: This contains the unit-level tests for the page. Read the [testing section](Testing.md#unit-tests-with-jest) for more details about writing tests.

## Routing

In order to determine the Pages that get loaded for a particular path within the browser, Routes are setup to create the respective mappings.

Below is an example of a Route definition for a sample Login page:

```
{
  path: '/login',
  name: 'login',
  meta: { layout: 'default' },
  component: () => import(/* webpackChunkName: "login" */ '@/pages/login'),
},
```

The **path** property specifies where the page will be accessible under the domain, for example: localhost:8080**/login**.

The **name** field provides an alternative means of identifying and navigation to defined pages programatically. This approach is preferable because the route names can be externalized into global constants and shared throughout your code for navigational consistency.

The **meta** property allows specifying arbitrary data that will get passed along to the loaded Page. The CLI recognizes a sub-property called layout which it will use to attach a [Layout](#layouts) to a page.

The **component** property specifies the Page to load for the given path. Here we used the recommended approach of dynamically loading the Page component using the **import()** function.

?> The import function is not the same as the import statements found at the top of a module file. The former is an asynchronous function that will load a module on-demand at runtime, while the latter only does static, compile-time, imports that always get bundled into the core application’s JavaScript payload.

The comment within the import statement is a directive for the Webpack pre-processor that compiles to project to create a new file which only contains the code needed to construct and execute the respective Page.

!>The comment inside the brackets of the import function are important and should be made unique to support proper code separation - or Chunking as it’s technically referred to. Do not delete them and ensure the value for `webpackChunkName` is unique for each route.

## Components

A Component is a conceptual grouping for Vue components which are imported by [Pages](#pages) and other Components.

Unlike Pages, Components are never used in Routing. That would deviate from the RDVue development style guide.

### Technical

A Component contains all the files present for [Pages](#pages) with the addition of:

*   \[component\]**.story.ts**: This contains the list of stories which describe the component’s usage. This is helpful for documentation purposes in providing live examples of key ways a Component can be used through the included Storybook preview tool.
    

* * *

Components use special decorators within their TypeScript file to add metadata useful for generating its documentation within Storybook:

*   **@StoryComponent**: decorates the Component’s class, providing the same functionality as @Component (used in pages) with the addition of:
    

|                                                                           |                                                                                                                                                     |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **description**  <br>type: string; default: undefined                     | Describe the component’s overall purpose.                                                                                                           |
| **module**  <br>type: string; default: undefined                          | Text stating the module used in the import statement (eg. “@/components/foo”)                                                                       |
| **playground** (optional)  <br>type: boolean, default: true               | Toggles the Playground feature for this component within the Storybook preview.                                                                     |
| **api** (optional)  <br>type: boolean, default: true                      | Display the Component’s list of props, slots and events on the API tab within the Storybook preview tool.                                           |
| slots (optional)  <br>type: {\[key: string\]: string}, default: undefined | Describe the slots available within the component. Eg.<br><br>```<br>slots: { <br>  header: ‘The header component goes here’,<br>  ... <br>}<br>``` |

*   **@StoryProp**: decorates the Component’s Props, providing the same functionality as @Prop with the addition of:
    

|                                                        |                                                                                                                                               |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **description**  <br>type: string; default: undefined  | Describe the prop's overall purpose.                                                                                                          |
| **values** (optional)  <br>\[array; default: undefined | An optional list of values which are considered acceptable for the prop. This is great for constraining Props that are bound to an enum type. |

*   **@StoryEvent**: decorates the Component’s Events, providing the same functionality as @Event with the addition of:
    

|                                                       |                                       |
| ----------------------------------------------------- | ------------------------------------- |
| **description**  <br>type: string; default: undefined | Describe the event’s overall purpose. |

## Layouts

A Layout is a conceptual grouping given to components which serve the purpose of rendering re-usable pieces of UI shared by many pages. An easy example is the header and footer information displayed on many sites: though the body of the page changes often, those elements remain the same.

?>A Layout allows us to define the common elements while leaving a slot (router-view) to inject the actual body of the Page.

### Technical

To get a Page to use a Layout, edit it’s definition in the **router.ts** file and add the following option:

```
meta: {
  layout: '<layout-name>',
}
```

For example:

```
 routes: [
    {
      path: '/',
      name: 'home',
      component: [...],
      meta: {
        layout: 'two-column',
      },
    },
  ]
```

Above, the Layout refers to a component within the **src/layouts** directory called **two-column**.

A Layout must contain a router-view to display the Page within the area designated for it’s content.

Each generated Layout is contained within it’s own sub-folder within the **src/layouts** directory. The directory contains the following files which each carry out a specific role in developing a Layout:

*   \[layout\].**vue**: This contains the Vue template markup used to implement the structure and layout of a Layout. It is a mix of HTML and special Vue syntaxes which allow declarative databinding and structural manipulation.
    
*   \[layout\].**ts**: This contains the controller which provides the procedural code-behind logical needed to add integrations to a Layout. Through this file you may expose data and handle events generated by Layout elements.
    
*   \[layout\].**scss**: This contains the stylesheet to be applied to the Layout- and that Layout only. The styles within this file are scoped, meaning they cannot be used to target any elements except those defined directly within the \[layout\].vue template file.
    

?>Scoped CSS may seem weird at first because regular CSS operates with global impunity, however it is a great approach for compartmentalizing styles so they do not jump their intended scope and affect other elements. Global level styles can be added in the [Theme](Theming.md#global-styles) directory.

*   \[layout\].**spec.ts**: This contains the unit-level tests for the Layout. Read the [testing section](Testing.md#unit-tests-with-jest) for more details about writing tests.

## Stores

A Store is a mechanism for maintain application state in a way which is globally accessible to all components. We use them as intermediary layers to issue API calls to relevant services, and cache the results for \[re\]use. Though the thought may occur to use a plain JavaScript object to achieve state management, a Vue Store differs in two distinct ways:

*   Properties are reactive. Changing Store values will automatically propagate to the component-level bindings which use them.
    
*   Stores enforce a strong process-control for mutating values. Every change within a store **must** go through a specially designed method, called a **Mutation**, in order to update an internal value. This also produces the side-effect of making state manipulation atomic and track-able (using the [Vue DevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)).
    

An application can have as many Stores as needed to logically group state concerns. The RDVue CLI creates strongly typed Stores, enabling full Intellisense and compiler support when writing code against them.

Data within a Store can be managed using 3 intrinsic functionalities of every Store:

*   Getters: Retrieve a value within the store.
    
*   Actions - Arbitrary, asynchronous, functions which can perform business logic and invoke mutations.
    
*   Mutations - Special, synchronous, functions which only update the values in Store. The operate atomically, meaning their changes are indivisible.

### Technical

A Store consists of a standard Class, with **Decorators** providing the special functionality:

*   The **@Module** Decorator is added to the class itself and will be preconfigured with the necessary options whenever you use the CLI to create a new Store.
    
*   The **@Action** Decorator is added to the class’ methods that want to carry-out business logic and be able to persist the result of that into state. @MultiParamAction is preferred over this Decorator due to Vuex quirks in how multiple parameters are handled.
    

?>If multiple parameters are used in a base @Action, the real value of the first parameter will be an array with a payload object, and the second parameter will be an options object. This will likely be entirely misaligned from the type information you specified in TypeScript.

*   The **@MultiParamAction** Decorator is the preferred alternative to @Action because it allows methods to receive multiple parameters.
    
*   The **@Mutation** Decorator flags a method as being able to update the Store’s state. That means any fields which belong to the class may be set within the execution context of these methods.
    
