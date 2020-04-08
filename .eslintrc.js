const path = require('path')

module.exports = {
  extends: ['@hey3/eslint-config'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      webpack: { config: path.join(__dirname, './webpack.config.js') },
    },
  },
}
