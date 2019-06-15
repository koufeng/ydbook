const argv = require("yargs-parser")(process.argv.slice(2));
const _mode = argv.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const merge = require("webpack-merge");
const glob = require("glob");
const files = glob.sync("./src/web/views/**/*.entry.js");
let _plugins = [];
const = require("html-webpack-plugin");
for (let item of files) {
  // console.log('🐘', item)
  if (/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/g.test(item) == true) {
    let entryKey = RegExp.$1
    console.log('🍊🍊🍊', entryKey)

  }
}
let _entry = {};
let webpackConfig = {
  entry: _entry,
  plugins: [
    ..._plugins
  ]
}
module.exports = merge(webpackConfig, _mergeConfig)
