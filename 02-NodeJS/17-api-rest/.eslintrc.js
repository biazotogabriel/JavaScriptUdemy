module.exports = {
  env: {
    //  browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    semi: 'off',
    'import/extensions': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
  },
};
