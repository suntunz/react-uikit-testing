import React from 'react'
import Icon from '@ant-design/icons'

import { IconProps } from './types/Icon.interface'

export const TitleIcon: React.FC<IconProps> = (props) => {
    const { style, size, ...otherProps } = props
    const styledWrapper = { ...style, fontSize: size + 'px' }
    return (
        <Icon style={styledWrapper} {...otherProps} viewBox='0 0 34 34'>
            <svg fill='none' height={size} viewBox='0 0 34 34' width={size} xmlns='http://www.w3.org/2000/svg'>
                <rect fill='url(#paint0_linear)' height='24' width='24' y='9' />
                <g opacity='0.8'>
                    <rect fill='url(#paint1_linear)' height='24' width='24' x='10' />
                    <rect height='23' stroke='white' strokeOpacity='0.32' width='23' x='10.5' y='0.5' />
                </g>
                <defs>
                    <linearGradient gradientUnits='userSpaceOnUse' id='paint0_linear' x1='12' x2='12' y1='9' y2='33'>
                        <stop stopColor='#5A6D68' />
                        <stop offset='1' stopColor='#1A1F36' />
                    </linearGradient>
                    <linearGradient gradientUnits='userSpaceOnUse' id='paint1_linear' x1='22' x2='22' y1='0' y2='24'>
                        <stop stopColor='#25B84E' />
                        <stop offset='1' stopColor='#5CFF42' />
                    </linearGradient>
                </defs>
            </svg>
        </Icon>
    )
}

export default TitleIcon

TitleIcon.defaultProps = {
    size: 24,
    color: '#fff',
}
