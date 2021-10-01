import { Meta, Story } from '@storybook/react'

import Avatar, { IAvatarProps } from './Avatar'

export default {
    title: 'Main/Avatar',
    component: Avatar,
    argTypes: {},
} as Meta

const Template: Story<IAvatarProps> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
    name: 'Display name',
    title: 'สร้างโดย',
    src: 'https://storage.googleapis.com/static.bitkubnext.com/accounts/image/nft-market/temp/bk-logo.png',
}
