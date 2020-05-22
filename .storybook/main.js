const custom = require('../webpack.config.js')

module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    'storybook-readme',
  ],
  stories: ['../src/components/**/*.stories.tsx'],
  webpackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
      resolve: custom.resolve,
    }
  },
}
