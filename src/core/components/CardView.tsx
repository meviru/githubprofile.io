import styled from "styled-components";
import Card from "../../shared/components/Card";
import { useContext } from "react";
import { GithubContext } from "../../context";

const CardWrapper = styled.div`
  display: grid;
  gap: 34px 32px;
  grid-template-columns: 1fr 1fr;
`;

const ViewAllWrapper = styled.div`
  text-align: center;
  margin: 46px 0 90px 0;
`;

const ViewAllButton = styled.a`
  color: #98a3b7;
  text-decoration: none;
`;

const CardView = () => {
  const { profile, repositoryList } = useContext(GithubContext);

  const getOrgUrl = (url: string | undefined) => {
    const username = url?.split("/").pop();
    return `https://github.com/orgs/${username}/repositories`;
  }
  return (
    <>
      <CardWrapper>
        {repositoryList &&
          repositoryList.length > 0 &&
          repositoryList.map((repo) =>
            <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer">
              <Card repo={repo} />
            </a>)}
      </CardWrapper>
      <ViewAllWrapper>
        <ViewAllButton href={profile.type === 'User' ? `${profile.html_url}?tab=repositories` : getOrgUrl(profile.html_url)} target="_blank" rel="noreferrer">View all repositories</ViewAllButton>
      </ViewAllWrapper>
    </>
  );
};

export default CardView;
