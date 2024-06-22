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
  const { repositoryList } = useContext(GithubContext);
  return (
    <>
      <CardWrapper>
        {repositoryList &&
          repositoryList.length > 0 &&
          repositoryList.map((repo) => <Card key={repo.id} repo={repo} />)}
      </CardWrapper>
      <ViewAllWrapper>
        <ViewAllButton href="#">View all repositories</ViewAllButton>
      </ViewAllWrapper>
    </>
  );
};

export default CardView;
