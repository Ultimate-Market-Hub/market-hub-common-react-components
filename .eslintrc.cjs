module.exports = {
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    extraFileExtensions: ['.json'],
  },
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'prettier',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:react-hooks/recommended',
    'plugin:markdown/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    'no-console': 'error',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'prettier/prettier': 2,
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['./**/*.json'],
    },
  ],
};
