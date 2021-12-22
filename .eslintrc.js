const eslintCommon = require('./eslint-common')

const config = {
    ...eslintCommon.commonConfig,
    extends: [...eslintCommon.commonExtends, 'plugin:react/recommended', 'plugin:tailwindcss/recommended'],
    rules: {
        ...eslintCommon.commonRules,
        'import/no-unused-modules': 'off',
        'import/named': 'off',
    },
}

module.exports = config
