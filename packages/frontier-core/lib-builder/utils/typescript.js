const { spawn } = require('cross-spawn');

// reg exps for managing tsc output
const tsErrorRegExp = /error TS/;
const errorCountRegExp = /(?<=Found )\d+(?= error)/;

/**
 * Build types output and esnext intermediate artifact (used for subsequent steps) with tsc
 */
function tscAsync({ pkgDir }) {
  return new Promise((resolve, reject) => {
    const tsc = spawn('tsc', ['-p', 'tsconfig.build.json'], { cwd: pkgDir });
    tsc.stdout.on('data', (data) => {
      const log = data.toString();
      // only relay tsc error messages to stdout
      if (tsErrorRegExp.test(log)) {
        console.log(log);
      }
    });

    tsc.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(
          'tsc error: run `tsc -p tsconfig.build.json --noEmit` for verbose errors',
        );
      }
    });
  });
}

/**
 * Build types output and esnext intermediate artifact (used for subsequent steps) with tsc in watch mode
 */
function tscWatch({ onChangeDetected, onFirstSuccess, pkgDir }) {
  const tscWatcher = spawn('tsc', ['-w', '-p', 'tsconfig.build.json'], {
    cwd: pkgDir,
  });
  let firstSuccess = false;

  tscWatcher.stdout.on('data', (data) => {
    const log = data.toString();

    if (errorCountRegExp.test(log)) {
      const errorCount = log.match(errorCountRegExp)[0];

      if (errorCount === '0') {
        if (!firstSuccess) {
          firstSuccess = true;
          onFirstSuccess();
        }
        return;
      }

      console.log(`Found ${errorCount} TS errors`);
      return;
    }

    if (log.includes('File change detected')) {
      onChangeDetected();
      return;
    }

    if (tsErrorRegExp.test(log)) {
      console.log(log);
    }
  });
}

module.exports = { tscAsync, tscWatch };
