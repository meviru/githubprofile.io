import styled from "styled-components";
import { Profile } from "../../models";
import { useContext } from "react";
import { GithubContext } from "../../context";

const SearchResultWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 9;
  padding: 8px;
  display: flex;
  cursor: pointer;
  margin-top: 8px;
  visibility: hidden;
  align-items: center;
  border-radius: 12px;
  background-color: #111629;
  &.show {
    visibility: visible;
  }
`;

const SearchResultAvatar = styled.div`
  width: 72px;
  height: 72px;
  flex: 0 0 72px;
  border-radius: 12px;
`;

const AvatarImage = styled.img`
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 12px;
`;

const SearchResultDescription = styled.div`
  flex-grow: 1;
  padding: 0 12px;
  overflow: hidden;
`;

const RepoName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #cdd5e0;
`;

const RepoDescription = styled.p`
  font-size: 12px;
  color: #98a3b7;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 8px;
`;

const SearchResult = ({
  profile,
  isProfileSelected,
}: {
  profile: Profile;
  isProfileSelected: boolean;
}) => {
  const { setProfileInfo } = useContext(GithubContext);

  const updateProfile = () => {
    setProfileInfo(profile);
  }

  return (
    <SearchResultWrapper onClick={updateProfile} className={isProfileSelected ? "show" : ""}>
      <SearchResultAvatar>
        <AvatarImage src={profile.avatar_url} alt={profile.name} />
      </SearchResultAvatar>
      <SearchResultDescription>
        {profile.name?.length ?
          <RepoName title={profile.name}>{profile.name}</RepoName> :
          <RepoName title={profile.login}>{profile.login}</RepoName>
        }
        {profile.bio && (
          <RepoDescription title={profile.bio}>{profile.bio}</RepoDescription>
        )}
      </SearchResultDescription>
    </SearchResultWrapper>
  );
};

export default SearchResult;
