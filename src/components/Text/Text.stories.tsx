import { Meta, Story } from '@storybook/react'

import Text, { ITextProps } from './Text'

export default {
    title: 'Typography/Text',
    component: Text,
    argTypes: {
        text: {
            control: false,
        },
        size: {
            control: false,
        },
        color: {
            control: false,
        },
        fontFamily: {
            control: false,
        },
        className: {
            control: false,
        },
    },
} as Meta

const Template: Story<ITextProps> = (args) => {
    return (
        <div>
            <Text {...args} size='tiny' text='Tiny size: 10px' />
            <Text {...args} size='xs' text='Extra small size: 12px' />
            <Text {...args} size='sm' text='Small size: 14px' />
            <Text {...args} size='base' text='Base size: 16px' />
            <Text {...args} size='lg' text='Large size: 18px' />
            <Text {...args} size='xl' text='Extra Size: 20px' />
            <br />
            <Text {...args} fontFamily='sans' size='xl' text='with font family font-sans' />
            <Text {...args} fontFamily='serif' size='xl' text='with font family font-serif' />
            <Text {...args} fontFamily='mono' size='xl' text='with font family font-mono' />
            <br />
            <Text {...args} color='base' text='With base color' />
            <Text {...args} color='red' size='xl' text='With red color' />
            <Text {...args} color='yellow' size='xl' text='With yellow color' />
            <Text {...args} color='primary' size='xl' text='With primary color' />
            <Text {...args} color='secondary' size='xl' text='With secondary color' />
            <br />
            <Text {...args} className='text-3xl' color='red' text='With custom classname' />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {}
