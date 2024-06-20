import styled from "styled-components";
import heroBg from "/hero-image-github-profile.png";

const HeroWrapper = styled.header`
    height: 240px;
    background: url(${heroBg}) no-repeat center center/cover;
`

const Hero = () => {
    return <>
        <HeroWrapper>

        </HeroWrapper>
    </>
}

export default Hero; 