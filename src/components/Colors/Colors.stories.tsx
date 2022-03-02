import { Meta, Story } from '@storybook/react'
import { Fragment } from 'react'

const colors: object = require('tailwindcss/colors')

const Colors = () => {
    const colorPalette = Object.entries(colors)

    return (
        <div className='m-4'>
            {colorPalette.map(
                ([color, palette], index) =>
                    typeof palette === 'object' && (
                        <Fragment key={index}>
                            <h1 className='mb-1'>{color}</h1>
                            <div className='flex pb-4 mb-4 space-y-3 sm:space-y-0 sm:space-x-4 text-sm border-b border-b-black'>
                                {Object.entries(palette).map(([thicken, colorCode], key) => (
                                    <div className='flex flex-col flex-1' key={key}>
                                        <div className='w-full h-10 rounded' style={{ background: colorCode as string }}></div>
                                        <div>{thicken}</div>
                                        <div>{colorCode as string}</div>
                                    </div>
                                ))}
                            </div>
                        </Fragment>
                    ),
            )}
        </div>
    )
}

export default {
    title: 'TailwindCSS/Colors',
    component: Colors,
    argTypes: {},
} as Meta

const Template: Story = (args) => <Colors {...args} />

export const Default = Template.bind({})
Default.args = {}
