import React from 'react'
import Icon from '@ant-design/icons'

import { IconProps } from './types/Icon.interface'

export const MediumIcon: React.FC<IconProps> = (props) => {
    const { style, size, color, ...otherProps } = props
    const styledWrapper = { ...style, fontSize: size + 'px' }
    return (
        <Icon style={styledWrapper} {...otherProps} viewBox='0 0 16 14'>
            <path
                d='M14.7233 2.15664L16 0.935302V0.667969H11.5773L8.42533 8.5133L4.83933 0.667969H0.202V0.935302L1.69333 2.73064C1.83867 2.8633 1.91467 3.0573 1.89533 3.25264V10.308C1.94133 10.562 1.85867 10.8233 1.68 11.008L0 13.044V13.308H4.76333V13.0406L3.08333 11.008C2.90133 10.8226 2.81533 10.566 2.852 10.308V4.2053L7.03333 13.3113H7.51933L11.1147 4.2053V11.4593C11.1147 11.6506 11.1147 11.69 10.9893 11.8153L9.696 13.0666V13.3346H15.9707V13.0673L14.724 11.8466C14.6147 11.764 14.558 11.6253 14.5813 11.4906V2.51264C14.558 2.3773 14.614 2.23864 14.7233 2.15664Z'
                fill={color}
            />
        </Icon>
    )
}

export default MediumIcon

MediumIcon.defaultProps = {
    size: 24,
    color: '#fff',
}
