import styled from "styled-components";
import iconLicence from "/Chield_alt.svg";
import iconNesting from "/Nesting.svg";
import iconStar from "/Star.svg";

const CardContent = styled.div`
    padding: 20px;
    border-radius: 12px;
    background: rgb(17,22,41);
    background: -moz-linear-gradient(90deg, rgba(17,22,41,1) 0%, rgba(28,27,71,1) 90%);
    background: -webkit-linear-gradient(90deg, rgba(17,22,41,1) 0%, rgba(28,27,71,1) 90%);
    background: linear-gradient(90deg, rgba(17,22,41,1) 0%, rgba(28,27,71,1) 90%);
`

const CardHeader = styled.div`
    margin-bottom: 20px;
`

const CardTitle = styled.h2`
    color: #CDD5E0;
    font-size: 20px;
    font-weight: 500;
`

const CardDescription = styled.p`
    color: #98A3B7;
    font-size: 14px;
    margin-top: 12px;
`

const CardBody = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`

const CardStatWrapper = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`

const CardStat = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`
const CardStatName = styled.span`
    color: #98A3B7;
`

const CardUpdates = styled.div`
    color: #98A3B7;
    font-size: 12px;
`

const Card = () => {
    return <>
        <CardContent>
            <CardHeader>
                <CardTitle>.github</CardTitle>
                <CardDescription>Community health files for the @GitHub organization</CardDescription>
            </CardHeader>
            <CardBody>
                <CardStatWrapper>
                    <CardStat>
                        <img src={iconLicence} alt="Licence" />
                        <CardStatName>MIT</CardStatName>
                    </CardStat>
                    <CardStat>
                        <img src={iconNesting} alt="Nesting" />
                        <CardStatName>2369</CardStatName>
                    </CardStat>
                    <CardStat>
                        <img src={iconStar} alt="Star" />
                        <CardStatName>703</CardStatName>
                    </CardStat>
                </CardStatWrapper>
                <CardUpdates>updated 4 days ago</CardUpdates>
            </CardBody>
        </CardContent>
    </>
}

export default Card;