export interface IButtonProps {}

const Button: React.FC<IButtonProps> = (props) => {
    const { children } = props
    return (
        <div className='py-3 px-4 sm:px-6 text-right bg-gray-50'>
            <button
                className='flex justify-center items-center py-3 md:py-4 px-8 md:px-10 w-full text-base md:text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent'
                type='submit'
            >
                {children}
            </button>
        </div>
    )
}

Button.defaultProps = {
    children: 'Save',
}

export default Button
