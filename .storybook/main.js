module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        'storybook-addon-designs',
        'storybook-addon-styled-component-theme/dist/preset',
        {
            name: '@storybook/preset-ant-design',
            options: {
                lessOptions: {
                    modifyVars: {},
                },
            },
        },
        {
            name: '@storybook/preset-create-react-app',
            options: {
                craOverrides: {
                    fileLoaderExcludes: ['less'],
                },
            },
        },
    ],
}
