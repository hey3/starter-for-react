module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  ignoreFiles: ['src/styles/reset.css'],
  rules: {
    'keyframes-name-pattern': [
      '^[a-z][a-zA-Z0-9]+$',
      {
        message: 'Expected keyframe name to be lowerCamelCase',
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [
          // CSS Modules composition
          // https://github.com/css-modules/css-modules#composition
          'composes',
        ],
      },
    ],
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]+$',
      {
        message: 'Expected class selector to be lowerCamelCase',
      },
    ],
  },
}
