import React from 'react'
import Icon from '@ant-design/icons'

import { IconProps } from './types/Icon.interface'

export const TwitterIcon: React.FC<IconProps> = (props) => {
    const { style, size, color, ...otherProps } = props
    const styledWrapper = { ...style, fontSize: size + 'px' }
    return (
        <Icon style={styledWrapper} {...otherProps} viewBox='0 0 16 14'>
            <path
                d='M14.356 3.742C15.0067 3.28 15.554 2.70333 16 2.03933V2.03867C15.4047 2.29933 14.7713 2.47267 14.11 2.55667C14.79 2.15067 15.3093 1.51267 15.5533 0.744C14.9193 1.122 14.2193 1.38867 13.4733 1.538C12.8713 0.896667 12.0133 0.5 11.0773 0.5C9.26133 0.5 7.79933 1.974 7.79933 3.78067C7.79933 4.04067 7.82133 4.29067 7.87533 4.52867C5.14867 4.39533 2.73533 3.08867 1.114 1.09733C0.831333 1.58867 0.664667 2.15067 0.664667 2.75533C0.664667 3.89133 1.24933 4.898 2.122 5.48133C1.59467 5.47133 1.078 5.318 0.64 5.07733V5.11333C0.64 6.70733 1.77667 8.03133 3.268 8.33667C3.00067 8.41 2.71 8.44467 2.408 8.44467C2.198 8.44467 1.986 8.43267 1.78733 8.38867C2.212 9.68733 3.41867 10.6427 4.852 10.674C3.736 11.5467 2.31867 12.0727 0.784667 12.0727C0.516 12.0727 0.258 12.0607 0 12.028C1.45333 12.9647 3.17467 13.5 5.032 13.5C10.8207 13.5 14.5933 8.67067 14.356 3.742Z'
                fill={color}
            />
        </Icon>
    )
}

export default TwitterIcon

TwitterIcon.defaultProps = {
    size: 24,
    color: '#fff',
}