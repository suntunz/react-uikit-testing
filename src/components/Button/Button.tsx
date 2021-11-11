import { Button as AntdButton } from 'antd'

export interface IButtonProps {}

const Button: React.FC<IButtonProps> = (props) => {
    const { ...rest } = props
    return <AntdButton {...rest}>Button</AntdButton>
}

Button.defaultProps = {}

export default Button
