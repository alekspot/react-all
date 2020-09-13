module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        'space-infix-ops': ['error'],
        'space-before-blocks': ['error', 'always'],
        'indent': ['error', 4],
        'semi': 'error',
        'react/prop-types': 'off',
        '@typescript-eslint/comma-spacing': ['error'],
        'quotes': ['error', 'single'],
        'keyword-spacing': ['error', {'before': true, 'after': true}],
        'object-curly-spacing': 'error',
        'react/jsx-curly-spacing': ['error'],
        'padding-line-between-statements': ['error', {'blankLine': 'always', 'prev': '*', 'next': 'return'}],
        'react/display-name': 'off'
    },
    ignorePatterns: ['webpack.config.js']
};
