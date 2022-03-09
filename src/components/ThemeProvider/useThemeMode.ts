import { useEffect, useState } from 'react'

import type { TypeTheme } from './ThemeProvider'
import { getStorage, setStorage } from '../../utils/localStorage'

interface IThemeModeReturnType {
    /**
     * Theme mode @TypeTheme
     */
    theme: TypeTheme

    /**
     * Switch theme mode function.
     */
    themeToggle: () => void
}

/**
 * Hooks function.
 * Use for switch theme mode and get theme mode.
 * @returns {object}
 */

const useThemeMode = (): IThemeModeReturnType => {
    const DEFAULT_THEME = 'light'
    const [theme, setTheme] = useState<TypeTheme>(DEFAULT_THEME)

    const setMode = (mode: TypeTheme) => {
        setStorage({ key: 'theme', value: mode, withPrefix: true })
        setTheme(mode)
    }

    const themeToggle = () => (theme === 'dark' ? setMode('light') : setMode('dark'))

    useEffect(() => {
        const localTheme = getStorage({ key: 'theme', withPrefix: true }) || DEFAULT_THEME
        localTheme && setTheme(localTheme as TypeTheme)
    }, [])

    return { theme, themeToggle }
}

export default useThemeMode
