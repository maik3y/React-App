var base = require("./webpack.config.base");
var merge = require("webpack-merge");
var { HotModuleReplacementPlugin } = require("webpack");
var config = {
  mode: "development",
  plugins: [new HotModuleReplacementPlugin()]
};
module.exports = merge(base, config);
