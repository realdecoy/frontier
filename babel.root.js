module.exports = ({
  envConfig = {},
  isTest = false,
  plugins = [],
  presets = [],
  runtimeConfig = {},
}) => {
  presets = [
    ['@babel/preset-env', { loose: true, ...envConfig }],
    ['@babel/preset-typescript', { onlyRemoveTypeImports: true }],
  ].concat(presets);

  plugins = [
    ['@babel/plugin-transform-runtime', { ...runtimeConfig }],
  ].concat(plugins);

  return {
    plugins,
    presets,
  };
};
