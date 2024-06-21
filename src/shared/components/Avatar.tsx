import styled from "styled-components";

const AvatarWrapper = styled.div`
    width: 120px;
    height: 120px;
    padding: 8px;
    margin-top: -42px;
    border-radius: 20px;
    background-color: #20293A;
`

const AvatarImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
`

const Avatar = ({ src }: { src: string }) => {
    return <AvatarWrapper>
        <AvatarImg src={src} alt="Avatar" />
    </AvatarWrapper>
}

export default Avatar;