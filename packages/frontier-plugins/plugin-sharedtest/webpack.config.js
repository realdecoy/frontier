const { resolve } = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { name: library } = require('./package.json');

const nodeExternalsOpts = {};

module.exports = function(env = {}) {
  return {
    mode: 'production',
    entry: resolve(__dirname, 'esnext', 'index'),
    resolve: {
      extensions: ['.js' ],
    },
    externals: [
      nodeExternals(nodeExternalsOpts),
      nodeExternals({
        ...nodeExternalsOpts,
        modulesDir: resolve(__dirname, '..', '..', '..', 'node_modules'),
      }),
    ],
    module: {
      rules: [],
    },
    output: {
      filename: 'index.js',
      path: resolve(__dirname, 'dist'),
      libraryTarget: 'commonjs2',
      library,
    },
  };
};
