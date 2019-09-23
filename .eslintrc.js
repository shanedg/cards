const ERROR = 'error';
const WARN = 'warn';

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    indent: [
      ERROR,
      2
    ],
    'linebreak-style': [
      ERROR,
      'unix'
    ],
    quotes: [
      ERROR,
      'single'
    ],
    semi: [
      ERROR,
      'always'
    ],
    'no-unused-vars': [
      WARN,
      {
        argsIgnorePattern: '^_'
      }
    ],
  },
};
