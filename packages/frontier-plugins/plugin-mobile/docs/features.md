# Features

This section will provide a brief introduction to generating features inside a project. Each available feature has a dedicated section in our documentation.

Reading through this section will get you comfortable with the CLI.

An in depth look at the command used in this section, along with all available commands, can be found in [CLI Commands](cli-reference.md#add). 

> It is recommended to read through the [CLI Reference](cli-reference.md#add) before continuing with this document.


* * *


## Components

Components are independent and reusable bits of code. They include the functional logic of the component along with styling and are imported by [Screens](#screens) and [Layout](#layouts).

Unlike Screens, Components are never used in Nagivation. That would deviate from our development style guide.

### Usage

```bash
frontier mobile:add:component <component-name>

# Example
frontier mobile:add:component fancy-text
```

### Technical

A Component folder consists of for two files. These file include:

*   \[component\]**.tsx**: This file holds actual functional logic and view hierarchy for the component you are trying to create..
    

*   \[component\]**.styles.tsx**: This contains the styling of the component. It is an abstraction similar to CSS StyleSheets with some of the attribute but not all. 

See example of a component:

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

This is an example of the stylesheetc (`fancy-text.styles.tsx`).

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

* * *

## Screens

A Screen is a conceptual grouping for React Native Components used in nagivation. Technically a screen is a component but in order to standardize how we work with react we want you to think of screen as its own thing. Screen are **not** to be imported by other Screen, Components or Layouts.

A Screen needs to be added to the [Navigator](#nagivation) before it can be used within a mobile application.
### Usage

```bash
frontier mobile:add:screen <screen-name>

# Example
frontier mobile:add:screen login
```
### Technical

Each generated Screen is contained within it's own sub-folder within the **src/screens** directory. The directory contains the following files which each carry out a specific role in developing a Screen:

*   \[screen\].**tsx**: This is similar to a [Component](#component) but this is generally where we make API calls to fetch data to populate the views and import other components. Screen are also used within navigation. 

    
*   \[screen\].**styles.tsx**: All Stylesheet file are the same as the stylesheet used shown in [Component](#component).
    

***


## Services

Services are focused classed designed to interact with web API endpoints. As a good design pattern a service should:

*   Only interact with a single domain

*   Only provide features from the domain which are relevant to the theme of the service. Eg. A user service should be focused on methods that support such; adding order related data would make for poor encapsulation.
    
```bash
frontier mobile:add:service <service-name>

# Example
frontier mobile:add:service auth

# Output File 
> src/services/auth.service.tsx
```

### Technical

Each generated serive is contained within the sub-folder `src/services` directory. The directory contains a file for each service that has been created:

*   \[service-name\].**serivce.tsx**: The file will contain a related grouping of http functions.

*   While each generated service resides in its own file and class, all services extend a predefined BaseService class in order to provide centralized functionality.
    
*   Each service is able to specify a unique web API endpoint with which to interact - or none at all for services providing local functionality (Eg. wrapper storage mechanism over AsyncStorage).
    


***

## Nagivation

In order to determine the Screens that get loaded for a particular path within the application, Routes are setup to create the respective mappings.

Below is an example of a Route definition for a sample Login page:

```jsx
<Stack.Navigator screenOptions={{ headerShwon: false}} initialRouteName='Login'>
  <Stack.Screen name="Login" component={Login} />
</Stack.Navigator>
```


The **name** field provides an alternative means of identifying and navigating to defined pages programatically. This approach is preferable because the route names can be externalized into global constants and shared throughout your code for navigational consistency.

The **component** property specifies the Screen component to load for the given name.

Navigation should be centralized within the **src/core/navigation** directory. This is where the [React Navigation](https://reactnavigation.org/) library is configured and where the `Stack`.

?> For more details on the available options for configuring a Stack, please refer to the [React Navigation](https://reactnavigation.org/docs/stack-navigator/) documentation, and more specifically, the [API Definition](https://reactnavigation.org/docs/stack-navigator/#api-definition).


* * *


## Stores / Context

A Context is a mechanism for maintain application state in a way which is globally accessible to all components. We use them as intermediary layers to issue API calls to relevant services, and cache the results for \[re\]use. Though the thought may occur to use a plain JavaScript object to achieve state management, a React Context differs in one distinct ways:

*   Properties are reactive. Changing Context values will automatically propagate to the component-level bindings which use them.
    

An application can have as many Contexts as needed to logically group state concerns. The Frontier CLI creates strongly typed Contexts, enabling full Intellisense and compiler support when writing code against them.

### Technical

A Store consists of a standard Class, with **Decorators** providing the special functionality:

*   The **@Module** Decorator is added to the class itself and will be preconfigured with the necessary options whenever you use the CLI to create a new Store.
    
*   The **@Action** Decorator is added to the class’ methods that want to carry-out business logic and be able to persist the result of that into state. @MultiParamAction is preferred over this Decorator due to Vuex quirks in how multiple parameters are handled.
    

?>If multiple parameters are used in a base @Action, the real value of the first parameter will be an array with a payload object, and the second parameter will be an options object. This will likely be entirely misaligned from the type information you specified in TypeScript.

*   The **@MultiParamAction** Decorator is the preferred alternative to @Action because it allows methods to receive multiple parameters.
    
*   The **@Mutation** Decorator flags a method as being able to update the Store’s state. That means any fields which belong to the class may be set within the execution context of these methods.
    
