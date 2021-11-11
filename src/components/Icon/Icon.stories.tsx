import React from 'react'
import { Meta } from '@storybook/react'

import { IconProps } from '../../assets/icons/types/Icon.interface'

export default {
    title: 'Common/Icon',
    argTypes: {
        size: {
            control: { type: 'number' },
            defaultValue: 24,
        },
        color: {
            defaultValue: '#000000',
            control: { type: 'color' },
        },
    },
} as Meta

const context = require.context('../../assets/icons', true, /.tsx$/)
const components: { [key: string]: any } = context.keys().reduce((accum, path) => {
    const file = path.substring(2).replace('.tsx', '')
    if (file === 'index')
        return {
            ...accum,
        }
    return {
        ...accum,
        [file]: context(path),
    }
}, {})

export const Default: React.FC<IconProps> = ({ size, color }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {Object.keys(components).map((file, index) => {
                const Icon = components[file].default
                return (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
                        <Icon color={color} size={size} />
                        {file}
                    </div>
                )
            })}
        </div>
    )
}
