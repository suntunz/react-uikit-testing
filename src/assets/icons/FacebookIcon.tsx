import React from 'react'
import Icon from '@ant-design/icons'

import { IconProps } from './types/Icon.interface'

export const FacebookIcon: React.FC<IconProps> = (props) => {
    const { style, size, color, ...otherProps } = props
    const styledWrapper = { ...style, fontSize: size + 'px' }
    return (
        <Icon style={styledWrapper} {...otherProps} viewBox='0 0 9 16'>
            <path
                d='M6.665 2.65667H8.12567V0.112667C7.87367 0.078 7.007 0 5.99767 0C3.89167 0 2.449 1.32467 2.449 3.75933V6H0.125V8.844H2.449V16H5.29833V8.84467H7.52833L7.88233 6.00067H5.29767V4.04133C5.29833 3.21933 5.51967 2.65667 6.665 2.65667Z'
                fill={color}
            />
        </Icon>
    )
}

export default FacebookIcon

FacebookIcon.defaultProps = {
    size: 24,
    color: '#fff',
}
