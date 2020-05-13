const custom = require('../webpack.config.js')

module.exports = {
  webpackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
      resolve: custom.resolve,
    }
  },
}
