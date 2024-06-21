import styled from "styled-components";
import Card from "../../shared/components/Card";

const CardWrapper = styled.div`
    display: grid;
    gap: 34px 32px;
    grid-template-columns: 1fr 1fr;
`


const ViewAllWrapper = styled.div`
    text-align: center;
    margin-top: 46px;
`

const ViewAllButton = styled.a`
    color: #98A3B7;
    text-decoration: none;
`

const CardView = () => {
    return <>
        <CardWrapper>
            <Card />
        </CardWrapper>
        <ViewAllWrapper>
            <ViewAllButton href="#">View all repositories</ViewAllButton>
        </ViewAllWrapper>
    </>
}

export default CardView;