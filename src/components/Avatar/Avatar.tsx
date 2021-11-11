import { Input } from 'antd'

export interface IAvatarProps {}

const Avatar: React.FC<IAvatarProps> = (props) => {
    const { ...rest } = props
    return <Input {...rest} />
}

Avatar.defaultProps = {}

export default Avatar
