import React from 'react'
import Icon from '@ant-design/icons'

import { IconProps } from './types/Icon.interface'

export const ReportIcon: React.FC<IconProps> = (props) => {
    const { style, size, color, ...otherProps } = props
    const styledWrapper = { ...style, fontSize: size + 'px' }
    return (
        <Icon style={styledWrapper} {...otherProps} viewBox='0 0 15 17'>
            <path
                d='M9.4 2L9.16 0.8C9.07 0.34 8.66 0 8.18 0H1C0.45 0 0 0.45 0 1V16C0 16.55 0.45 17 1 17C1.55 17 2 16.55 2 16V10H7.6L7.84 11.2C7.93 11.67 8.34 12 8.82 12H14C14.55 12 15 11.55 15 11V3C15 2.45 14.55 2 14 2H9.4Z'
                fill={color}
            />
        </Icon>
    )
}

export default ReportIcon

ReportIcon.defaultProps = {
    size: 24,
    color: '#fff',
}
