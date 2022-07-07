<div align="left">
  <br/>
  <a href="https://www.realdecoy.com/jamaica/" title="REALDECOY">
    <img width=400px src="https://www.realdecoy.com/wp-content/uploads/2019/02/Realdecoy-logo-transparent.png" alt="rd logo">
  </a>
  <br/>
</div>

# Frontier CLI

The cli is the engine behind all the operations that encompass the authoring of
frontier’s application authoring and management. The CLI’s primary purpose is to
enable the user to run commands supplied by pre-published addons from the npm
package manager or locally available on the users pc. The CLI will have several
core commands that in themselves work to serve some basic development needs. As
commands are installed and meet compatibility requirements, the CLI will auto
discover the commands from their respective locations and make them available to
the users by as a list by calling `~$ frontier` and invoke each individual
command using the syntax:

```bash
~$ frontier <COMMAND> <PARAMS> <FLAGS>
```

&nbsp; &nbsp;

## Installation & Usage

<!-- custom-usage -->

### Install

```bash
npm install -g @rdfrontier/cli
```

&nbsp; &nbsp;

### Check Commands

```bash
frontier
```

&nbsp; &nbsp;

### Help Menu

The help menu can be accessed with the command:

```bash
frontier --help
```

&nbsp; &nbsp;

### Check Version

The current version of rdvue can be retrieved with the command:

```bash
frontier -v|--version|version
```

&nbsp; &nbsp;

## Options

```txt
Usage:
  frontier <action>

Commands:
    plugins          -  List installed plugins
    plugins:install  -  Install plugins

Options:
    --help | -h      -  Show help information
    --version | -v     -  Show current version
```

&nbsp; &nbsp; &nbsp;

## Development

```bash

```

&nbsp; &nbsp; &nbsp;
