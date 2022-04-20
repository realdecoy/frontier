# Frontier Package Builder

Builds TypeScript packages into module and dist/bundle output with accompanying
types, while also ensuring that code will run in both browser and node contexts
while being fully tree-shakeable for webpack/parcel/etc builders to minimize
client-side bundle size.


## How it Works

This package works by combining TypeScript, Babel, and Webpack to generate the
appropriate build artifacts. It uses TypeScript only to strip types and emit
.d.ts files, leaving the actual JS transpilation to Babel in order to be able to
share @babel/runtime with community packages (instead of getting tied to
ts.lib). Webpack is left to do the bundling for the dist output.

## Install

```
yarn add -D @frontier/lib-builder
```

## CLI Usage

The base command is simply:

```
build-package
```


