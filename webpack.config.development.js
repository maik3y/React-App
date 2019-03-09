const merge = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const base = require('./webpack.config.base');

const config = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  plugins: [new HotModuleReplacementPlugin()]
};
module.exports = merge(base, config);
