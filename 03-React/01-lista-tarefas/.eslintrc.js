module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  // parser: 'babel-eslint',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: 'off',
    'react/jsx-filename-extension': 'off',
    'react/state-in-constructor': 'off',
    'no-unused-vars': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'class-methods-use-this': 'off',
    'react/forbid-prop-types': 'off',
  },
};
