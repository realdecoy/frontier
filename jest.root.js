/**
 * Takes in custom jest configuration opts and merges them with the repo
 * defaults, allowing easier and smaller per-package configuration. More info
 * can be found here: https://jestjs.io/docs/en/configuration.html
 */
module.exports = function (opts) {
  return {
    clearMocks: true,
    coverageDirectory: 'test-results',
    coverageReporters: ['html'],
    collectCoverage: true,
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    // this may not do anything
    modulePathIgnorePatterns: [
      '<rootDir>/.next',
      '<rootDir>/build',
      '<rootDir>/esnext',
      '<rootDir>/dist',
      '<rootDir>/module',
      '<rootDir>/types',
    ],
    notify: true,
    transform: {
      'ts': "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    testRegex: '.*\\.spec\\.ts$',
    timers: 'modern',
    ...opts,
  };
};
