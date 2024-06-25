import styled from "styled-components";
import { SkeletonAnimation } from "../../styles/GlobalStyles";

const AvatarWrapper = styled.div`
  width: 120px;
  height: 120px;
  padding: 8px;
  flex: 0 0 120px;
  margin-top: -42px;
  border-radius: 20px;
  background-color: #20293a;
  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    flex: 0 0 100px;
  }
`;

const AvatarImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const AvatarSkeleton = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  background-color: #20293a;
  &:before {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background-image: linear-gradient(to right, #20293a 0%, rgba(255,255,255,0.15) 20%, #20293a 40%, #20293a 100%);
        background-repeat: no-repeat;
        background-size: 450px 400px;
        animation: ${SkeletonAnimation} 1s linear infinite;
    }
`

const Avatar = ({ src }: { src: string | undefined }) => {
  return (
    <AvatarWrapper>
      {src && src.length > 0 ? <AvatarImg src={src} alt="Avatar" /> : <AvatarSkeleton />}
    </AvatarWrapper>
  );
};

export default Avatar;
