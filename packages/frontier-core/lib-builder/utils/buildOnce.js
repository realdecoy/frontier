const { BuildTimer } = require('./BuildTimer');
const { babelAsync } = require('./babel');
const { cleanupArtifactsAsync } = require('./cleanup');
const { notifyBuildComplete } = require('./notify');
const { tscAsync } = require('./typescript');
const { webpackAsync } = require('./webpack');

/**
 * Builds types, module and bundle output, and cleans up artifacts in a single pass
 */
function buildOnce({ notify, pkgDir, pkgName, serverOnly, webpackOnly }) {
  console.log(`Building ${pkgName} package...\n`);

  function onTimerFinish({ durationSec }) {
    console.log(`Build time: ${durationSec}s`);
    if (notify) {
      notifyBuildComplete({ durationSec, pkgName });
    }
  }
  const timer = new BuildTimer({ onTimerFinish });

  const buildAsync = webpackOnly
    ? webpackAsync({ pkgDir })
    : tscAsync(pkgDir)
        .then(() =>
          Promise.all([
            webpackAsync({ pkgDir }),
            serverOnly ? undefined : babelAsync({ pkgDir }),
          ]),
        )
        .then(() => cleanupArtifactsAsync({ pkgDir }));

  return buildAsync.then(timer.end).catch((e) => {
    console.log(`Build failed (${e})`);
    // exit with error code
    process.exit(1);
  });
}

module.exports = { buildOnce };
