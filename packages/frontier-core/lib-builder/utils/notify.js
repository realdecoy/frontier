const notifier = require('node-notifier');

function notifyBuildComplete({ durationSec, pkgName }) {
  notifier.notify({
    title: `${pkgName} package`,
    message: `Rebuild complete (${durationSec}s)`,
  });
}

module.exports = { notifyBuildComplete };
