import styled from "styled-components";
import Avatar from "../../shared/components/Avatar";
import avatar from "/hero-image-github-profile.png";
import InfoCard from "../../shared/components/InfoCard";

const ProfileWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Flex = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-left: 38px;
    align-items: flex-start;
`

const TitleWrapper = styled.div`
    margin: 20px 0 34px;
`

const Title = styled.h1`
    color: #CDD5E0;
    font-size: 32px;
    font-weight: 500;
`

const SubTitle = styled.p`
    color: #97A4B7;
    margin-top: 8px;
`

const ProfileInfo = () => {
    return <>
        <ProfileWrapper>
            <Avatar src={avatar} />
            <Flex>
                <InfoCard title="Followers" description="27839" />
                <InfoCard title="Following" description="0" />
                <InfoCard title="Location" description="San Francisco, CA" />
            </Flex>
        </ProfileWrapper>
        <TitleWrapper>
            <Title>GitHub</Title>
            <SubTitle>How people build software.</SubTitle>
        </TitleWrapper>
    </>
}

export default ProfileInfo;