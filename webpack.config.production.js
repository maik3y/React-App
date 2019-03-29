/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      })
    ]
  }
};
module.exports = merge(base, config);
