const {override, useBabelRc} = require("customize-cra");

module.exports = function (config, env) {
  return Object.assign(config, override(
      useBabelRc()
      )(config, env)
  )
}