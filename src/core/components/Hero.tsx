import styled from "styled-components";
import heroBg from "/hero-image-github-profile.png";
import SearchBox from "./SearchBox";

const HeroWrapper = styled.header`
    height: 240px;
    padding: 32px 20px;
    background: url(${heroBg}) no-repeat center center/cover;
`

const Hero = () => {
    return <>
        <HeroWrapper>
            <SearchBox />
        </HeroWrapper>
    </>
}

export default Hero; 