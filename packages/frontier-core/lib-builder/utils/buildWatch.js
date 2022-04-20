/* eslint-disable no-inner-declarations */
const { BuildTimer } = require('./BuildTimer');
const { babelWatch } = require('./babel');
const { cleanupArtifacts } = require('./cleanup');
const { notifyBuildComplete } = require('./notify');
const { tscWatch } = require('./typescript');
const { webpackWatch } = require('./webpack');

/**
 * Builds types and module and bundle output with incremental watching rebuild
 * functionality. Cleans up build artifacts on exit.
 */
function buildWatch({ notify, pkgDir, pkgName, serverOnly, webpackOnly }) {
  console.clear();
  console.log(`Building ${pkgName} package in watch mode...`);

  if (webpackOnly) {
    function onBuild() {
      console.log(`Webpack rebuild complete`);
    }

    webpackWatch({ pkgDir, onBuild });
  } else {
    function onTimerFinish({ durationSec }) {
      console.log(`Build time: ${durationSec}s`);
      if (notify) {
        notifyBuildComplete({ durationSec, pkgName });
      }
    }
    const timer = new BuildTimer({ onTimerFinish });

    function onFirstSuccess() {
      if (!serverOnly) {
        babelWatch({ pkgDir, onBuild: timer.endBabel });
      }
      webpackWatch({ pkgDir, onBuild: timer.endWebpack });
    }

    function onChangeDetected() {
      console.clear();
      console.log(`Rebuilding ${pkgName} package...`);
      timer.restart();
    }

    tscWatch({ pkgDir, onFirstSuccess, onChangeDetected });

    // on control-C, clean up and then exit
    process.on('SIGINT', () => {
      cleanupArtifacts({ pkgDir });
      process.exit();
    });
    process.on('exit', () => cleanupArtifacts({ pkgDir }));
  }
}

module.exports = { buildWatch };
