const path = require('path');

module.exports = {
  extensions: ['*', '.js', '.jsx', '.json'],
  alias: {
    actions: path.resolve(__dirname, '../../src/actions'),
    api: path.resolve(__dirname, '../../src/api'),
    components: path.resolve(__dirname, '../../src/components'),
    constants: path.resolve(__dirname, '../../src/constants'),
    pages: path.resolve(__dirname, '../../src/pages'),
    selectors: path.resolve(__dirname, '../../src/selectors'),
    utils: path.resolve(__dirname, '../../src/utils')
  }
};
