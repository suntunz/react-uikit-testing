import React from 'react'

export interface ITitleProps {
    text: string
}

const Title = ({ text }: ITitleProps) => {
    return (
        <h1 className='text-[36px] text-gray-600 md:text-purple-800 lg:text-yellow-700 xl:text-bitkub-600 2xl:text-pink-700'>
            {text}
        </h1>
    )
}

export default Title
