export interface IAvatarProps {}

const Avatar: React.FC<IAvatarProps> = () => {
    return <div>test</div>
}

Avatar.defaultProps = {
    size: 50,
}

export default Avatar
