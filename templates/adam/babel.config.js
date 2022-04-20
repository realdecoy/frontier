const configurator = require('../../../babel.root');

module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  const envConfig = {
    modules: !api.env('module') && 'auto',
  };

  return configurator({
    envConfig,
    isTest: api.env('test'),
  });
};
