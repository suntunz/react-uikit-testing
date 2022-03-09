import React from 'react'

import { ThemeProvider, useThemeMode } from '../ThemeProvider'
import { Button } from '../Button'
import { Text } from '../Text'

export interface IDarkMode {}

const DarkMode: React.FC<IDarkMode> = () => {
    const { theme, themeToggle } = useThemeMode()

    return (
        <ThemeProvider theme={theme}>
            <div className='flex justify-center items-center h-screen'>
                <div>
                    <Text className='py-3 text-center' color='primary' size='xl'>
                        Text with primary
                    </Text>
                    <Text className='py-3 text-center' color='secondary' size='xl'>
                        Text with secondary
                    </Text>
                    <h1 className='py-3 text-center'>Text without component</h1>
                    <Button onClick={() => themeToggle()}>Switch to {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</Button>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default DarkMode
