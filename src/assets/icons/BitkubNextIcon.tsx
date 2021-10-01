import React from 'react'
import Icon from '@ant-design/icons'

import { IconProps } from './types/Icon.interface'

export const BitkubNextIcon: React.FC<IconProps> = (props) => {
    const { style, size, ...otherProps } = props

    const styledWrapper = { ...style, fontSize: size + 'px' }
    return (
        <Icon style={styledWrapper} {...otherProps} viewBox='0 0 512 512'>
            <g clipPath='url(#clip0)'>
                <rect fill='#02D267' height='512' rx='128' width='512' />
                <path d='M586 287C265.5 421.5 42.8333 334.333 -37.5 297V512.5H586V287Z' fill='white' opacity='0.2' />
                <path d='M588 313C280.4 402.6 42.8333 350.333 -37.5 313L-76 510.5L572.5 520L588 313Z' fill='white' />
                <path
                    d='M368.82 203.998L263.508 13.1566C240.985 -27.6573 198.055 -53 151.439 -53H-43.7578C-115.32 -53 -172.981 5.67146 -171.739 77.2227L-164.184 512.223C-162.972 582.038 -106.03 638 -36.2036 638H144.858C194.91 638 240.369 608.827 261.221 563.326L373.114 319.167C390.024 282.268 388.431 239.535 368.82 203.998Z'
                    fill='white'
                    opacity='0.1'
                />
                <path
                    d='M187.82 203.998L78.285 5.50491C58.3674 -30.5885 20.4026 -53 -20.8218 -53C-84.1068 -53 -135.099 -1.11459 -134 62.161L-125.786 535.17C-124.795 592.248 -78.2413 638 -21.1549 638C19.7645 638 56.9301 614.15 73.9776 576.951L192.114 319.167C209.024 282.268 207.431 239.535 187.82 203.998Z'
                    fill='white'
                    opacity='0.05'
                />
                <g filter='url(#filter0_dd)'>
                    <path
                        d='M176.986 192.857L176.752 193.085C168.05 201.573 168.021 215.362 176.686 223.886L176.919 224.115C185.584 232.638 199.663 232.667 208.364 224.18L208.599 223.951C217.3 215.464 217.329 201.674 208.664 193.151L208.431 192.921C199.766 184.398 185.687 184.369 176.986 192.857Z'
                        fill='white'
                    />
                    <path
                        d='M193.744 99.9492L169.927 123.179L170.085 123.32L106.544 185.263V185.164L83 208.099L83.0863 208.183L83 208.282L106.285 231.174L192.981 316.925C192.981 316.925 213.476 290.44 193.327 270.619L129.872 208.155L193.37 146.17L225.428 177.754C252.754 204.676 272.242 177.163 272.242 177.163L193.744 99.9492Z'
                        fill='white'
                    />
                    <path
                        d='M428.698 208.674L429 208.392L319.392 100.566C319.392 100.566 299.257 126.332 318.328 145.083L383.048 208.758L319.694 270.574L290.052 241.441C268.824 220.55 240.678 239.469 240.678 239.469L318.788 316.274L342.562 293.072L428.856 208.871L428.698 208.674Z'
                        fill='white'
                    />
                    <path
                        d='M303.714 193.11L303.48 193.339C294.779 201.827 294.749 215.616 303.414 224.14L303.648 224.369C312.313 232.892 326.391 232.921 335.093 224.434L335.327 224.205C344.029 215.717 344.058 201.928 335.393 193.405L335.16 193.175C326.494 184.652 312.416 184.623 303.714 193.11Z'
                        fill='white'
                    />
                </g>
                <path
                    d='M122.062 406.209H131.35L159.885 421.15V406.209H169.172V452H159.885V430.994L131.35 416.141V452H122.062V406.209ZM206.121 406.209H245.115V414.354H215.408V423.494H241.717V431.141H215.408V443.885H245.73V452H206.121V406.209ZM293.051 428.738L275.443 406.209H286.811L298.969 421.971L311.186 406.209H322.377L304.447 428.65L322.992 452H311.596L298.559 435.535L285.229 452H274.008L293.051 428.738ZM367.764 414.354H350.859V406.209H393.955V414.354H377.051V452H367.764V414.354Z'
                    fill='#02D267'
                />
            </g>
            <defs>
                <filter
                    colorInterpolationFilters='sRGB'
                    filterUnits='userSpaceOnUse'
                    height='296.976'
                    id='filter0_dd'
                    width='426'
                    x='43'
                    y='59.9492'
                >
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                        in='SourceAlpha'
                        result='hardAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    />
                    <feOffset dy='8' />
                    <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0' />
                    <feBlend in2='BackgroundImageFix' mode='normal' result='effect1_dropShadow' />
                    <feColorMatrix
                        in='SourceAlpha'
                        result='hardAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation='20' />
                    <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0' />
                    <feBlend in2='effect1_dropShadow' mode='normal' result='effect2_dropShadow' />
                    <feBlend in='SourceGraphic' in2='effect2_dropShadow' mode='normal' result='shape' />
                </filter>
                <clipPath id='clip0'>
                    <rect fill='white' height='512' rx='128' width='512' />
                </clipPath>
            </defs>
        </Icon>
    )
}

BitkubNextIcon.defaultProps = {
    size: 24,
}

export default BitkubNextIcon
