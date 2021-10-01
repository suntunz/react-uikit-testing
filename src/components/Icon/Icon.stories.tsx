import React from 'react'
import { Meta } from '@storybook/react'
import styled from 'styled-components'

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
        <IconContainer>
            {Object.keys(components).map((file, index) => {
                const Icon = components[file].default
                return (
                    <IconWrapper key={index}>
                        <Icon color={color} size={size} />
                        {file}
                    </IconWrapper>
                )
            })}
        </IconContainer>
    )
}

const IconContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`
