const custom = require('../webpack.config.js')

module.exports = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials', '@storybook/addon-knobs'],
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/components/**/*.stories.tsx'],
  webpackFinal: config => ({
    ...config,
    module: { ...config.module, rules: custom.module.rules },
    resolve: custom.resolve,
  }),
}
