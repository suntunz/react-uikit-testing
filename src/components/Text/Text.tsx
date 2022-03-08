import React, { ReactNode } from 'react'

import switchCase from '../../utils/swtich-case'

export interface ITextProps {
    /**
     * text label
     */
    children: ReactNode

    /**
     * ####text size
     * - **tiny**: 10px;
     * - **xs**: 12px
     * - **sm**: 14px
     * - **base**: 16px
     * - **lg**: 18px
     * - **xl**: 20px
     * @default base
     */
    size?: 'tiny' | 'xs' | 'sm' | 'base' | 'lg' | 'xl'

    /**
     * text color
     * @default base
     */
    color?: 'base' | 'primary' | 'secondary' | 'red' | 'yellow'

    /**
     * font family
     * @default sans
     */
    fontFamily?: 'sans' | 'serif' | 'mono'

    /**
     * custom class name
     */
    className?: string
}

const Text: React.FC<ITextProps> = (props) => {
    const { children, size, color, fontFamily, className = null } = props

    const fontSizeClass = switchCase(size, {
        tiny: 'font-size-tiny',
        xs: 'font-size-extra-small',
        sm: 'font-size-small',
        base: 'font-size-base',
        lg: 'font-size-large',
        xl: 'font-size-extra-large',
        default: '',
    })

    const fontFamilyClass = switchCase(fontFamily, {
        sans: 'font-sans',
        serif: 'font-serif',
        mono: 'font-mono',
        default: '',
    })

    const fontColorClass = switchCase(color, {
        base: 'text-color-base',
        primary: 'text-primary',
        secondary: 'text-secondary',
        red: 'text-red-400',
        yellow: 'text-amber-300',
        default: '',
    })

    const classNames = [fontSizeClass, fontFamilyClass, fontColorClass, className].join(' ').replace(/  +/g, ' ')

    return <div className={classNames}>{children}</div>
}

export default Text
