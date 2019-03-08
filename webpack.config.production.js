var base = require("./webpack.config.base");
var merge = require("webpack-merge");
var config = {
  mode: "production"
};
module.exports = merge(base, config);
