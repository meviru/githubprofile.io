import styled from "styled-components";
import Hero from "../core/components/Hero";
import MainContent from "./MainContent";

const PageWrapper = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`

const AppLayout = () => {
    return <>
        <PageWrapper>
            <Hero />
            <MainContent />
        </PageWrapper>
    </>
}

export default AppLayout;