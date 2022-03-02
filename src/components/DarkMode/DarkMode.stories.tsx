import { Meta, Story } from '@storybook/react'

import DarkMode, { IDarkMode } from './DarkMode'

export default {
    title: 'TailwindCss/DarkMode',
    component: DarkMode,
} as Meta

const Template: Story<IDarkMode> = (args) => {
    return <DarkMode {...args} />
}

export const Default = Template.bind({})
Default.args = {}
