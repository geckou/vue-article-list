module.exports = {
  root         : true,
  parserOptions: {
    parser      : '@typescript-eslint/parser',
    ecmaVersion : 2020,
    sourceType  : 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx          : true,
    },
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    curly         : ['error', 'multi-line'],
    'comma-dangle': ['error', 'always-multiline'],
    'key-spacing' : ['error', {
      align: 'colon',
    }],
    'no-multi-spaces': ['error', {
      exceptions: { VariableDeclarator: true },
    }],
    'no-floating-decimal'           : 'off',
    'space-before-function-paren'   : ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'vue/attribute-hyphenation'     : ['error', 'never', {
      ignore: ['custom-prop'],
    }],
    'vue/v-on-event-hyphenation': ['error', 'never', {
      'autofix': false,
    }],
    'no-useless-escape': 'off',
  },
}