module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-mutable-exports": 0,
    "no-labels": 0,
    "import/extensions": 0,
    "prefer-const": 0,
    "import/first": 0,
    "import/prefer-default-export": 0,
  },
};
