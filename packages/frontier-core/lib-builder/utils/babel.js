const { join, resolve } = require('path');
const { transformFileAsync } = require('@babel/core');
const chokidar = require('chokidar');
const { outputFile } = require('fs-extra');
const globby = require('globby');
const {
  BABEL_MODULE_ENV,
  ESNEXT_TEMP_DIR,
  MODULE_DIR,
} = require('./constants');

function getSrcAndDestDirs({ pkgDir }) {
  return {
    destDir: resolve(pkgDir, MODULE_DIR),
    srcDir: resolve(pkgDir, ESNEXT_TEMP_DIR),
  };
}

/**
 * Transpiles file for ES5+ESM module output via babel
 */
function babelFileAsync({ cwd, dest, src }) {
  return transformFileAsync(src, { cwd, envName: BABEL_MODULE_ENV }).then(
    ({ code }) => {
      return outputFile(dest, code);
    },
  );
}

/**
 * Transpiles directory for ES5+ESM module output via babel
 */
function babelAsync({ pkgDir }) {
  const { destDir, srcDir } = getSrcAndDestDirs({ pkgDir });
  return globby('**/*.js?(x)', {
    cwd: srcDir,
  }).then((files) => {
    return Promise.all(
      files.map((file) => {
        const src = join(srcDir, file);
        const dest = join(destDir, file.replace(/\.jsx$/, '.js'));
        return babelFileAsync({ src, dest, cwd: pkgDir });
      }),
    );
  });
}

/**
 * Runs a babel build then starts a chokidar-based watcher for future changes
 */
function babelWatch({ onBuild, pkgDir }) {
  const { destDir, srcDir } = getSrcAndDestDirs({ pkgDir });
  return babelAsync({ pkgDir }).then(() => {
    onBuild();
    chokidar.watch(srcDir).on('change', (src) => {
      const dest = src.replace(srcDir, destDir).replace(/\.jsx$/, '.js');
      babelFileAsync({ src, dest, cwd: pkgDir }).then(onBuild);
    });
  });
}

module.exports = { babelAsync, babelWatch };
