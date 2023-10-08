module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/*', '!.storybook', 'dist'],
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:storybook/recommended'],
  plugins: ['unused-imports'],
  rules: {
    'import/export': 'off',
    'import/newline-after-import': [
      'error',
      {
        considerComments: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'unused-imports/no-unused-imports': 'error',
  },
  overrides: [
    {
      files: ['**/*.[jt]sx'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      env: {
        browser: true,
      },
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      rules: {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
        ],
        '@typescript-eslint/no-unused-vars': ['error'],
      },
    },
    {
      files: ['**'],
      extends: ['prettier'],
    },
  ],
}
