import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/utils/styled-component-theme'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import '../src/styles/root.less'

const globalDecorator = (StoryFn) => <StoryFn />

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const decorators = [globalDecorator]

const themes = [theme]
addDecorator(withThemesProvider(themes), ThemeProvider)
