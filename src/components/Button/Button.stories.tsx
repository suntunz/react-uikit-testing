import { Meta, Story } from '@storybook/react'

import Button, { IButtonProps } from './Button'

export default {
    title: 'Main/Button',
    component: Button,
    argTypes: {},
} as Meta

const Template: Story<IButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'Save',
}
