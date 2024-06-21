import styled from "styled-components";
import ProfileInfo from "../core/components/ProfileInfo";

const MainContentWrapper = styled.main`
    flex-grow: 1;
    padding-top: 12px;
`

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1018px;
`

const MainContent = () => {
    return <MainContentWrapper>
        <Container>
            <ProfileInfo></ProfileInfo>
        </Container>
    </MainContentWrapper>
}

export default MainContent;