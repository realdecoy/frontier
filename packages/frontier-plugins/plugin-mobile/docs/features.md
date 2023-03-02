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
$ frontier mobile:add:component <component-name>

# Example
$ frontier mobile:add:component fancy-text
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

### Choosing between Class and Function components

There are two ways in which components can be create in React / React Native. We can use Class or Function based components. Function based components are generally quicker to create for simple use cases. However, as the components get more complicated and require more logic Class based components make this a bit easier to work with. Here are some reasons how to help make your decision a bit easier.

**When to choose Class-Based components:**

1. If you want to work with components lifecycle functions - Even though react provides hooks like `useEffect()`, this can get quite cumbersome when the components grows.

2. If you are creating a [Screen](#screens).

3. If you are creating a [Context Provider](#tores/Context).

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


## Services

Services are focused classed designed to interact with web API endpoints. As a good design pattern a service should:

*   Only interact with a single domain

*   Only provide features from the domain which are relevant to the theme of the service. Eg. A user service should be focused on methods that support such; adding order related data would make for poor encapsulation.
    
```bash
$ frontier mobile:add:service <service-name>

# Example
$ frontier mobile:add:service auth

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

For more details on the available options for configuring a Stack, please refer to the [React Navigation](https://reactnavigation.org/docs/stack-navigator/) documentation, and more specifically, the [API Definition](https://reactnavigation.org/docs/stack-navigator/#api-definition).


* * *


## Stores / Context

A Context is a mechanism for maintain application state in a way which is globally accessible to all components. We use them as intermediary layers to issue API calls to relevant services, and cache the results for \[re\]use. Though the thought may occur to use a plain JavaScript object to achieve state management, a React Context differs in one distinct ways:

*   Properties are reactive. Changing Context values will automatically propagate to the component-level bindings which use them.
    

An application can have as many Contexts as needed to logically group state concerns. The Frontier CLI creates strongly typed Contexts, enabling full Intellisense and compiler support when writing code against them.

### Usage
    
```bash
$ frontier mobile:add:store <store-name>

# Example
$ frontier mobile:add:store auth

# Output File 
> src/contexts/auth.context.tsx
```

### Technical

Each generated serive is contained within the sub-folder `src/contexts` directory. The context will provide high order functions that will help you to inject global state within you Class based components. It will also provide you will hooks for you to use in your function based components.

| **Member**                                     | **Type**        | **Description**                                                                                                                      |
| ---------------------------------------------- | ----------------| ------------------------------------------------------------------------------------------------------------------------------------ |
| `ContextName`ContextProvider        |  React Component           | Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. |
| `ContextName`Consumer | React Component | Allows components to subscribe to changes in the global state endpoint.                                                                            |
| with`ContextName`  | HOC[^1]  | Used when Class-based components would like to consume data from the a context                                                                  |
| use`ContextName`    |     HOC[^1]                   | Used when function-based components would like to consume data from the a contextresponse.                                                                                       |

<br>

- `ContextName` - This is the provided name for the context when created using the CLI's `add` command above.

- [^1]_HOC (High-Order Component)_ - a higher-order component is a function that takes a component and returns a new enhanced component.
