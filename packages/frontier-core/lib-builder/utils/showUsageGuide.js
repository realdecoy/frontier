const commandLineUsage = require('command-line-usage');

const sections = [
  {
    header: 'frontier Package Builder',
    content:
      'Builds typescript packages into module and dist/bundle outputs with accompanying types.',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'pkgDir',
        alias: 'p',
        description:
          'Root directory of target package (default option, explicit flag not required)',
        type: String,
        typeLabel: '{underline directory}',
        defaultOption: true,
      },
      {
        name: 'watch',
        alias: 'w',
        description: 'Build in watch mode',
        type: Boolean,
      },
      {
        name: 'notify',
        alias: 'n',
        description: 'Display OS notification once build complete',
        type: Boolean,
      },
      {
        name: 'serverOnly',
        alias: 'S',
        description: 'Build in server-only mode',
        type: Boolean,
      },
      {
        name: 'webpackOnly',
        alias: 'W',
        description: 'Build in webpack-only mode',
        type: Boolean,
      },
      {
        name: 'help',
        description: 'Show the usage guide',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples',
    content: [
      {
        desc: '1. Basic usage',
        example: '$ build-package',
      },
      {
        desc: '2. Build and watch current package',
        example: '$ build-package --watch',
      },
      {
        desc: '3. Build from outside package',
        example: '$ build-package packages/foo',
      },
    ],
  },
];

function showUsageGuide() {
  console.log(commandLineUsage(sections));
}

module.exports = { showUsageGuide };
