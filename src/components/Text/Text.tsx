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
    const { text, size = 'base', color = 'base', fontFamily = '', className = null } = props

    const allowFontSize = ['tiny', 'xs', 'sm', 'base', 'lg', 'xl']
    const allowFontFamily = ['sans', 'serif', 'mono']
    const allowColor = ['base', 'primary', 'secondary', 'red', 'yellow']

    const fontSizeClass = allowFontSize.includes(size)
        ? switchCase(size, {
              tiny: 'text-tiny',
              xs: 'text-xs',
              sm: 'text-sm',
              base: 'text-base',
              lg: 'text-lg',
              xl: 'text-xl',
              default: 'text-base',
          })
        : ''

    const fontFamilyClass = allowFontFamily.includes(fontFamily)
        ? switchCase(fontFamily, {
              sans: 'font-sans',
              serif: 'font-serif',
              mono: 'font-mono',
              default: 'font-sans',
          })
        : ''

    const fontColorClass = allowColor.includes(color)
        ? switchCase(color, {
              base: 'text-color-base',
              primary: 'text-primary',
              secondary: 'text-secondary',
              red: 'text-red-400',
              yellow: 'text-amber-300',
              default: 'text-color-base',
          })
        : ''

    const classNames = [fontSizeClass, fontFamilyClass, fontColorClass, className].join(' ').trim()

    return <div className={classNames}>{text}</div>
}

export default Text
