import React from 'react'
import '../src/styles/index.less'

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
