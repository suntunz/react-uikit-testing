import { Meta, Story } from '@storybook/react'

import Title, { ITitleProps } from '../Title'

export default {
    title: 'Main/Title',
    component: Title,
    argTypes: {},
} as Meta

const Template: Story<ITitleProps> = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
    text: 'Storybook Title',
}
