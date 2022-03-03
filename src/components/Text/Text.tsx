import React from 'react'

import switchCase from '../../utils/swtich-case'

export interface ITextProps {
    /**
     * text label
     */
    text: string

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
    const { text, size, color, fontFamily = '', className = null } = props

    const fontSizeClass = switchCase(size, {
        tiny: 'text-tiny',
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
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

    const classNames = [fontSizeClass, fontFamilyClass, fontColorClass, className].join(' ').trim()

    return <div className={classNames}>{text}</div>
}

export default Text
