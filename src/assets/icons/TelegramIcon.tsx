import React from 'react'
import Icon from '@ant-design/icons'

import { IconProps } from './types/Icon.interface'

export const TelegramIcon: React.FC<IconProps> = (props) => {
    const { style, size, color, ...otherProps } = props
    const styledWrapper = { ...style, fontSize: size + 'px' }
    return (
        <Icon style={styledWrapper} {...otherProps} viewBox='0 0 16 14'>
            <path
                d='M6.27812 9.11963L6.01345 12.8423C6.39212 12.8423 6.55612 12.6796 6.75279 12.4843L8.52812 10.7876L12.2068 13.4816C12.8815 13.8576 13.3568 13.6596 13.5388 12.861L15.9535 1.5463L15.9541 1.54563C16.1681 0.548302 15.5935 0.158302 14.9361 0.402968L0.742785 5.83697C-0.225881 6.21297 -0.211215 6.75297 0.578119 6.99763L4.20679 8.1263L12.6355 2.8523C13.0321 2.58963 13.3928 2.73497 13.0961 2.99763L6.27812 9.11963Z'
                fill={color}
            />
        </Icon>
    )
}

export default TelegramIcon

TelegramIcon.defaultProps = {
    size: 24,
    color: '#fff',
}
