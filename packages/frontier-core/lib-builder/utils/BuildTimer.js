/**
 * Timer for getting long-pole time from concurrent babel and webpack builds
 */
function BuildTimer({ onTimerFinish }) {
  let startTime = Date.now();
  let babelDone;
  let webpackDone;

  function reset() {
    babelDone = false;
    webpackDone = false;
  }

  function finish() {
    if (babelDone && webpackDone) {
      if (onTimerFinish) {
        onTimerFinish({ durationSec: (Date.now() - startTime) / 1000 });
      }

      reset();
    }
  }

  return {
    restart() {
      reset();
      startTime = Date.now();
    },
    end() {
      babelDone = true;
      webpackDone = true;
      finish();
    },
    endBabel() {
      babelDone = true;
      finish();
    },
    endWebpack() {
      webpackDone = true;
      finish();
    },
  };
}

module.exports = { BuildTimer };
