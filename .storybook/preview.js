import React from 'react'

import './tailwind.css'

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
