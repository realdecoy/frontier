# Getting Started

[RDVue Mobile](https://github.com/realdecoy/rdmobile) is an opinionated CLI for generating React Native Expo projects. We do so by adopting a development style guide which enforces strong typing with TypeScript, standardized Component, Layout and Screen models,
and a data-layer design promoting unified consumption through React Contexts and Services.
Follow the [installation guide](#Step-1:-Installation) below to set up the Stripe CLI.


## Dependencies

You will need [React Native CLI](https://docs.expo.dev/get-started/installation/#expo-cli) and it dependencies in order to run the project.

## Installation
Installing the RDVue mobile plugin can be done with the following command:
```bash
$ frontier plugins:install @rdfrontier/plugin-mobile
```

### Validate installation

The current version of mobile can be retrieved with the command:

```bash
frontier mobile -v | --version
```

---

## Usage
Now we can start using the CLI if the installation was successful. To check if the everything went will, run the following commands below:

### Step 1: Create a project 

```bash
frontier mobile create-project <project-name>
```
Replace <project-name> with the actual name of your project. Preferrably written in snake case (eg. _my-awesome-project_).

**Example**
```bash
frontier mobile create-project my-awesome-project
```


### Step 2: Run project

```bash
cd my-awesome-project

# If you have a Mac
npm run ios

# If you have a Mac or Windows
npm run android
```

### Help

The help menu can be accessed with the command:

```bash
frontier mobile --help
```

## Next Steps


### Generating a Screen

```
frontier mobile add:page <screen-name>
```

Each generated Page gets its own dedicated folder. The folder will be given the name of the page. This folder is located at /src/pages/<page\-name> .

### Generating a Component

```
frontier mobile add:component <component-name>
```