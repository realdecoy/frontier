const packages = require('./packages');

// Compose Test Targets Using separate test configs allow a modular testing structure
module.exports = {
  projects: [ ...packages.projects],
};
