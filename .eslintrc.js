module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended' // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    rules: {
        indent: ['error', 4],
        semi: 'off',
        quotes: ['error', 'single'],
        'react/prop-types': 'off',
        'react/display-name': 'off'

    },
    ignorePatterns: ['webpack.config.js', 'webpack.alias.js' ]
};