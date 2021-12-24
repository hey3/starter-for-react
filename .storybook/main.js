const custom = require('../webpack.config.js')

module.exports = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  stories: ['../src'],
  webpackFinal: config => ({
    ...config,
    module: { ...config.module, rules: custom.module.rules },
    resolve: {
      ...config.resolve,
      alias: custom.resolve.alias,
      extensions: custom.resolve.extensions,
    },
  }),
}
