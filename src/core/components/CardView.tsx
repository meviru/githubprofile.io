import styled from "styled-components";
import Card from "../../shared/components/Card";

const CardWrapper = styled.div`
    display: grid;
    gap: 34px 32px;
    grid-template-columns: 1fr 1fr;
`

const CardView = () => {
    return <>
        <CardWrapper>
            <Card />
        </CardWrapper>
    </>
}

export default CardView;