import styled from "styled-components";
import Avatar from "../../shared/components/Avatar";
import InfoCard from "../../shared/components/InfoCard";
import { useContext } from "react";
import { GithubContext } from "../../context";

const ProfileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Flex = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-left: 38px;
  align-items: flex-start;
`;

const TitleWrapper = styled.div`
  margin: 20px 0 34px;
`;

const Title = styled.h1`
  color: #cdd5e0;
  font-size: 32px;
  font-weight: 500;
`;

const SubTitle = styled.p`
  color: #97a4b7;
  margin-top: 8px;
`;

const ProfileInfo = () => {
  const { profile } = useContext(GithubContext);
  return (
    <>
      <ProfileWrapper>
        <Avatar src={profile.avatar_url} />
        <Flex>
          <InfoCard title="Followers" description={profile.followers} />
          <InfoCard title="Following" description={profile.following} />
          <InfoCard title="Location" description={profile.location} />
        </Flex>
      </ProfileWrapper>
      <TitleWrapper>
        {profile.name?.length ? <Title>{profile.name}</Title> : <Title>{profile.login}</Title>}
        <SubTitle>{profile.bio}</SubTitle>
      </TitleWrapper>
    </>
  );
};

export default ProfileInfo;
