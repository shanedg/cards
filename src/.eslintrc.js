module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: false,
  },
  extends: [
    '../.eslintrc.js',
    // React recommended configuration automatically adds:
    // ```
    // parserOptions: {
    //   ecmaFeatures: { jsx: true }
    // },
    // plugins: ['react']
    // ```
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect',
    },
  },
};
