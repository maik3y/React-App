const merge = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const base = require('./webpack.config.base');

const config = {
  mode: 'development',
  plugins: [new HotModuleReplacementPlugin()]
};
module.exports = merge(base, config);
