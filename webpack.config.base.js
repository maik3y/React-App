/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['core-js', 'react', 'react-dom'],
    store: ['mobx', 'mobx-react-lite'],
    route: ['react-router', 'react-router-dom', 'react-router-config'],
    app: './src/index/index.tsx'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json']
  },
  output: {
    path: path.resolve(__dirname, './dist/www'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'perfection.tv',
      template: path.resolve(__dirname, './src/index/index.html'),
      chunks: 'all'
    })
  ]
};
