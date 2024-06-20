import styled from "styled-components";
import Hero from "../core/components/Hero";

const PageWrapper = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`

const MainContent = styled.main`
    flex-grow: 1;
    padding-top: 12px;
`

const AppLayout = () => {
    return <>
        <PageWrapper>
            <Hero></Hero>
            <MainContent></MainContent>
        </PageWrapper>
    </>
}

export default AppLayout;