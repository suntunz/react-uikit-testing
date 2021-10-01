import React from 'react'
import Icon from '@ant-design/icons'

import { IconProps } from './types/Icon.interface'

export const OfficialIcon: React.FC<IconProps> = (props) => {
    const { style, size, color, ...otherProps } = props
    const styledWrapper = { ...style, fontSize: size + 'px' }
    return (
        <Icon style={styledWrapper} {...otherProps} viewBox='0 0 32 32'>
            <svg fill='none' height={size} viewBox='0 0 32 32' width={size} xmlns='http://www.w3.org/2000/svg'>
                <rect fill={color} height='22.6274' transform='rotate(-45 0 16)' width='22.6274' y='16' />
                <rect fill={color} height='24' transform='rotate(-90 4 28)' width='24' x='4' y='28' />
                <g filter='url(#filter0_d)'>
                    <path d='M10 15L13.8571 19L22 12' stroke='white' strokeWidth='2' />
                </g>
                <defs>
                    <filter
                        colorInterpolationFilters='sRGB'
                        filterUnits='userSpaceOnUse'
                        height='11.1323'
                        id='filter0_d'
                        width='15.3717'
                        x='8.28015'
                        y='11.2422'
                    >
                        <feFlood floodOpacity='0' result='BackgroundImageFix' />
                        <feColorMatrix
                            in='SourceAlpha'
                            result='hardAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        />
                        <feOffset dy='1' />
                        <feGaussianBlur stdDeviation='0.5' />
                        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                        <feBlend in2='BackgroundImageFix' mode='normal' result='effect1_dropShadow' />
                        <feBlend in='SourceGraphic' in2='effect1_dropShadow' mode='normal' result='shape' />
                    </filter>
                </defs>
            </svg>
        </Icon>
    )
}

export default OfficialIcon

OfficialIcon.defaultProps = {
    size: 24,
    color: '#fff',
}
