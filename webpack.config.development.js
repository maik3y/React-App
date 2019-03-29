/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const base = require('./webpack.config.base');

const config = {
  mode: 'development'
};
module.exports = merge(base, config);
