import React, { useState } from 'react'

import { Button } from '../Button'
import { Text } from '../Text'

export interface IDarkMode {}

const DarkMode: React.FC<IDarkMode> = () => {
    const [darkMode, setDarkMode] = useState<Boolean>(false)

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className='flex justify-center items-center h-screen'>
                <div>
                    <Text className='py-3 text-center' color='primary' size='xl'>
                        Text with primary
                    </Text>
                    <Text className='py-3 text-center' color='secondary' size='xl'>
                        Text with secondary
                    </Text>
                    <h1 className='py-3 text-center'>Text without component</h1>
                    <Button onClick={() => setDarkMode(!darkMode)}>Switch to {darkMode ? 'Light Mode' : 'Dark Mode'}</Button>
                </div>
            </div>
        </div>
    )
}

export default DarkMode
