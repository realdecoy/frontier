const { resolve } = require('path');
const { promisify } = require('util');
const webpack = require('webpack');

function getWebpackCompiler({ pkgDir }) {
  const webpackConfig = require(resolve(pkgDir, 'webpack.config.js'));
  return webpack(webpackConfig());
}

/**
 * Build ES5 bundle output with webpack (requires output of buildTypes)
 */
function webpackAsync({ pkgDir }) {
  const webpackCompiler = getWebpackCompiler({ pkgDir });
  return promisify(webpackCompiler.run.bind(webpackCompiler))().then(
    (stats) => {
      if (!stats.hasErrors()) {
        return;
      }

      stats
        .toJson('errors-only')
        .errors.forEach((error) => console.error(error));
      throw new Error('webpack build error');
    },
  );
}

/**
 * Webpack compiler runs a build and then watches for incremental changes
 */
function webpackWatch({ onBuild, pkgDir }) {
  const webpackCompiler = getWebpackCompiler({ pkgDir });
  webpackCompiler.watch({}, (err, stats) => {
    if (!err && !stats.hasErrors()) {
      onBuild();
      return;
    }

    console.error('Webpack build error');

    if (err) {
      console.error(err);
    }

    if (stats.hasErrors()) {
      stats
        .toJson('errors-only')
        .errors.forEach((error) => console.error(error));
    }
  });
}

module.exports = { webpackAsync, webpackWatch };
