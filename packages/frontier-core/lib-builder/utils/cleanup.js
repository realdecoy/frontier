const { resolve } = require('path');
const { promisify } = require('util');
const rimraf = require('rimraf');
const { ESNEXT_TEMP_DIR } = require('./constants');

const rimrafAsync = promisify(rimraf);

function getArtifacts({ pkgDir }) {
  return [resolve(pkgDir, ESNEXT_TEMP_DIR)];
}

/**
 * Cleans up any intermediate transpilation artifacts
 */
function cleanupArtifacts({ pkgDir }) {
  getArtifacts({ pkgDir }).forEach((artifact) => rimraf.sync(artifact));
}

/**
 * Cleans up any intermediate transpilation artifacts (Promise-based async)
 */
function cleanupArtifactsAsync({ pkgDir }) {
  return Promise.all(
    getArtifacts({ pkgDir }).map((artifact) => rimrafAsync(artifact)),
  );
}

module.exports = { cleanupArtifacts, cleanupArtifactsAsync };
