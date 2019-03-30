/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const base = require('./webpack.config.base');

const config = {
  mode: 'development',
  resolve: {
    extensions: ['.scss']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
module.exports = merge(base, config);
