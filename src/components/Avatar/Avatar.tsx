import styled, { css } from 'styled-components'
import { Avatar as AntdAvatar, Button } from 'antd'

export interface IAvatarProps {
    /** Display name */
    name: string
    /** Display image. If the src is not provided, it will show the first 2 letters of name */
    src?: string
    /** Title of the avatar */
    title?: string
    /** Subtitle */
    subtitle?: string | JSX.Element
    /** Image size
     * @default 50px
     */
    size?: number | string
    /** Show only avatar image */
    hideDetail?: boolean
    /** Will show (คุณ) after the name */
    isOwner?: boolean
    /** Bold the name */
    isBold?: boolean
}

const Avatar: React.FC<IAvatarProps> = (props) => {
    const { name, src, title, size, hideDetail, subtitle, isOwner, isBold = false } = props

    return (
        <Wrapper>
            {src ? (
                <Image size={typeof size === 'string' ? size : `${size}px`} src={src} />
            ) : (
                <AntdAvatar size={typeof size === 'string' ? Number(size.split('px')[0]) : size}>{name?.substr(0, 2)}</AntdAvatar>
            )}

            <Button type='primary'>test</Button>

            {!hideDetail && (
                <Detail>
                    {title && <TitleWrapper>{title}</TitleWrapper>}
                    <div style={{ display: 'flex' }}>
                        <DisplayWrapper>
                            <StyledName $isBold={isBold}>{name}</StyledName>
                        </DisplayWrapper>
                        <OwnerText>{isOwner ? <span>(คุณ)</span> : ''}</OwnerText>
                    </div>
                    {subtitle}
                </Detail>
            )}
        </Wrapper>
    )
}

Avatar.defaultProps = {
    size: 50,
}

export default Avatar

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
`
const Image = styled.img<{ size: string }>`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: 50%;
    object-fit: cover;
`
const Detail = styled.div`
    margin-left: 16px;
`
const DisplayWrapper = styled.div`
    color: #262626;
`
const TitleWrapper = styled.div`
    color: #8c8c8c;
`
const OwnerText = styled.span`
    color: #8c8c8c;
    font-size: 16px;
    margin-left: 4px;
`

const StyledName = styled.span<{ $isBold: boolean }>`
    ${({ $isBold }) =>
        $isBold &&
        css`
            font-weight: 700;
        `}
`
