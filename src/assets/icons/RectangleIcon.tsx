import React from 'react'
import Icon from '@ant-design/icons'

import { IconProps } from './types/Icon.interface'

export const RectangleIcon: React.FC<IconProps> = (props) => {
    const { style, size, color, ...otherProps } = props
    const styledWrapper = { ...style, fontSize: size + 'px' }

    return (
        <Icon style={styledWrapper} {...otherProps} viewBox='0 0 26 26'>
            <rect
                fill={color}
                height='17'
                stroke='#C0C0C0'
                transform='rotate(-45 0.707107 12.728)'
                width='17'
                x='0.707107'
                y='12.728'
            />
        </Icon>
    )
}

export default RectangleIcon

RectangleIcon.defaultProps = {
    size: 18,
    color: '#FAFAFA',
}
