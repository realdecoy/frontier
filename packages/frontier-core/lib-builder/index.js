#!/usr/bin/env node

const { cwd } = require('process');
const commandLineArgs = require('command-line-args');
const { buildOnce } = require('./utils/buildOnce');
const { buildWatch } = require('./utils/buildWatch');
const { showUsageGuide } = require('./utils/showUsageGuide');

const argDefinitions = [
  {
    name: 'pkgDir',
    alias: 'p',
    type: String,
    defaultOption: true,
    defaultValue: cwd(),
  },
  { name: 'notify', alias: 'n', type: Boolean },
  { name: 'watch', alias: 'w', type: Boolean },
  { name: 'serverOnly', alias: 'S', type: Boolean },
  { name: 'webpackOnly', alias: 'W', type: Boolean },
  { name: 'help', alias: 'h', type: Boolean },
];

function run({ help, notify, pkgDir, serverOnly, watch, webpackOnly }) {
  if (help) {
    return showUsageGuide();
  }

  const pkgName = pkgDir.split('/').pop();
  const buildOpts = { notify, pkgDir, pkgName, serverOnly, webpackOnly };

  // if not watching, build once and exit
  if (!watch) {
    return buildOnce(buildOpts);
  }

  // start a persistent watch rebuilder
  buildWatch(buildOpts);
}

if (!module.parent) {
  run(commandLineArgs(argDefinitions));
}

module.exports = run;
