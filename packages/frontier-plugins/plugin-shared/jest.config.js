const configurator = require('../../../jest.root');

module.exports = configurator({
  setupFiles: ['./setupTests.ts'],
  testTimeout: 20000
});
