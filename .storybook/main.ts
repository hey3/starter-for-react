module.exports = {
  addons: ['@storybook/addon-essentials'],
  stories: ['../src/**/*.stories.tsx'],
  staticDirs: ['../public'],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return config
  },
}
