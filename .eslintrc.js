const path = require('path')

module.exports = {
  extends: ['./eslintConfig/eslint.js', './eslintConfig/typescript.js', './eslintConfig/react.js'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      webpack: { config: path.join(__dirname, './webpack.config.js') },
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/label-has-for': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums",
      },
    ],
    'no-use-before-define': 'off',
  },
}
