/* eslint-disable */

// config-overrides.js
// see: https://github.com/timarney/react-app-rewired

const path = require("path");
const fs = require("fs");
const {
  override,
  useBabelRc
} = require("customize-cra");

const rewireBabelLoader = require("react-app-rewire-babel-loader");
const rewireDefinePlugin = require("react-app-rewire-define-plugin");
const GitRevisionPlugin = require("git-revision-webpack-plugin");

// helpers

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const gitRevisionPlugin = new GitRevisionPlugin({
  versionCommand: "describe --always --tags --dirty",
});

module.exports = function (config, env) {
  // white-list some npm modules to the babel-loader pipeline
  // see: https://webpack.js.org/configuration/module/#rule-include
  // // console.log()
  // let arr = config.module.rules[1].oneOf
  // // console.log(arr)
  // // arr.forEach(item=> {
  // //   console.log(item.test)
  // //   console.log(item.options)
  // // })
  // arr[1].options.plugins = ['istanbul']

  // config.module.rules[0].use[0].options.plugins = ['istanbul']
  config = rewireBabelLoader.include(config, resolveApp("../styleguide"));

  // black-list some modules from the babel-loader pipeline
  // see: https://webpack.js.org/configuration/module/#rule-exclude

  config = rewireBabelLoader.exclude(config, /(node_modules|bower_components)/);

  // Use `webpack.DefinePlugin` to add the version number from package.json
  config = rewireDefinePlugin(config, env, {
    "process.env.VERSION": JSON.stringify(gitRevisionPlugin.version()),
  });
  return Object.assign(config, override(
      useBabelRc()
      )(config, env)
  )
}
