// Let's load the default configs:
const defaults = require('./wdio.conf').config;
import * as _ from 'lodash';

const overrides = {
  // Here are all 'pipelines' specific overrides:
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        '--disable-infobars',
        '--window-size=1280,800',
        '--headless',
        '--no-sandbox',
        '--disable-gpu',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
      ],
    },
  }],

};

// Send the merged config to wdio
exports.config = _.defaultsDeep(overrides, defaults)