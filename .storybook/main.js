const lessToJs = require('less-vars-to-js')
const fs = require('fs')

const paletteLess = fs.readFileSync('./src/styles/default-theme.less', 'utf8')

// Pass in file contents
const palette = lessToJs(paletteLess, { resolveVariables: true, stripPrefix: true })

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        'storybook-addon-designs',
        'storybook-tailwind-dark-mode',
        '@storybook/preset-create-react-app',
    ],
}
