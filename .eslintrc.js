module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/attributes-order': 'warn',
    'vue/order-in-components': 'warn',
    'vue/prop-name-casing': 'warn',
    'vue/require-default-prop': 'warn',
    'vue/require-prop-types': 'warn',
    'vue/v-bind-style': 'warn',
    'vue/v-on-style': 'warn',
    'vue/match-component-file-name': 'warn',
    'vue/require-name-property': 'warn',
    'vue/no-multiple-template-root': 'off'
  },

  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
