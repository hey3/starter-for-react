module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'alpha-value-notation': 'number',
    'color-hex-length': 'long',
    'function-name-case': [
      'lower',
      {
        ignoreFunctions: [/.*/],
      },
    ],
    'function-no-unknown': null,
    'no-descending-specificity': true,
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: [/.*/],
        ignoreProperties: [/.*/],
        ignoreFunctions: [/.*/],
      },
    ],
  },
  customSyntax: '@stylelint/postcss-css-in-js',
}
