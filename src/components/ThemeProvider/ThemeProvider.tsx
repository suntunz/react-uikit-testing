import React, { ReactNode } from 'react'

export type TypeTheme = 'dark' | 'light'

export interface IThemeProvider {
    /**
     * React children node JSX
     */
    children: ReactNode

    /**
     * Theme mode @TypeTheme
     * @default light
     */
    theme: TypeTheme
}

const ThemeProvider: React.FC<IThemeProvider> = (props) => {
    const { children, theme } = props

    return <div className={theme}>{children}</div>
}

ThemeProvider.defaultProps = {
    theme: 'light',
}

export default ThemeProvider
