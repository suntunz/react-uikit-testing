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
            <Text {...args} size='tiny'>
                Tiny size: 10px
            </Text>
            <Text {...args} size='xs'>
                Extra small size: 12px
            </Text>
            <Text {...args} size='sm'>
                Small size: 14px
            </Text>
            <Text {...args} size='base'>
                Base size: 16px
            </Text>
            <Text {...args} size='lg'>
                Large size: 18px
            </Text>
            <Text {...args} size='xl'>
                Extra Size: 20px
            </Text>
            <br />
            <Text {...args} fontFamily='sans' size='xl'>
                with font family font-sans
            </Text>
            <Text {...args} fontFamily='serif' size='xl'>
                with font family font-serif
            </Text>
            <Text {...args} fontFamily='mono' size='xl'>
                with font family font-mono
            </Text>
            <br />
            <Text {...args}>With default color</Text>
            <Text {...args} color='base'>
                With base color
            </Text>
            <Text {...args} color='red' size='xl'>
                With red color
            </Text>
            <Text {...args} color='yellow' size='xl'>
                With yellow color
            </Text>
            <Text {...args} color='primary' size='xl'>
                With primary color
            </Text>
            <Text {...args} color='secondary' size='xl'>
                With secondary color
            </Text>
            <br />
            <Text {...args} className='text-3xl' color='red'>
                With custom classname
            </Text>
            <Text {...args} className='text-3xl text-brown-500'>
                With custom classname color brown
            </Text>
            <br />
            <h1>Heading H1</h1>
            <h6>Heading H6</h6>
            <Text {...args} className='font-size-small'>
                With custom classname color brown
            </Text>
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {}
