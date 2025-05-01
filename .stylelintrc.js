module.exports = {
  extends: '@mate-academy/stylelint-config',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'if',
          'else',
          'for',
          'each',
          'while',
          'mixin',
          'include',
          'extend',
          'function',
          'return',
        ],
      },
    ],
    'no-descending-specificity': null,
  },
};
