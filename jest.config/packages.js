module.exports = {
  collectCoverageFrom: [
    '**/src/**/*.{js,ts}', // From all Source Code
    '!**/*.d.ts', // Not From Typings
    '!**/node_modules/**', // Not from Dependencies
  ],
  coverageDirectory: 'test-results',
  projects: ['<rootDir>/../packages/**/jest.config.js'],
};
