import { ReactNode } from 'react'

export interface IButtonProps {
    children: ReactNode | string
    onClick?: () => void
}

const Button: React.FC<IButtonProps> = (props) => {
    const { children, ...rest } = props
    return (
        <div>
            <button
                className='flex justify-center items-center py-3 md:py-4 px-8 md:px-10 w-full text-base md:text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent'
                type='submit'
                {...rest}
            >
                {children}
            </button>
        </div>
    )
}

export default Button
