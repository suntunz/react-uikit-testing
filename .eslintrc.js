const eslintCommon = require('./eslint-common')

const config = {
    ...eslintCommon.commonConfig,
    extends: [
        ...eslintCommon.commonExtends,
        'plugin:react/recommended',
        'plugin:tailwindcss/recommended',
        'plugin:storybook/recommended',
    ],
    rules: {
        ...eslintCommon.commonRules,
        'import/no-unused-modules': 'off',
        'import/named': 'off',

        'no-console': [
            'error',
            {
                allow: ['warn', 'error'],
            },
        ],

        'max-lines': [
            'error',
            {
                max: 300,
                skipBlankLines: true,
                skipComments: true,
            },
        ],
    },
}

module.exports = config
