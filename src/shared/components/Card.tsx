import styled from "styled-components";
import iconLicence from "/Chield_alt.svg";
import iconNesting from "/Nesting.svg";
import iconStar from "/Star.svg";
import { Repository } from "../../models";

const CardContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background: rgb(17, 22, 41);
  background: -moz-linear-gradient(
    90deg,
    rgba(17, 22, 41, 1) 0%,
    rgba(28, 27, 71, 1) 90%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(17, 22, 41, 1) 0%,
    rgba(28, 27, 71, 1) 90%
  );
  background: linear-gradient(
    90deg,
    rgba(17, 22, 41, 1) 0%,
    rgba(28, 27, 71, 1) 90%
  );
`;

const CardHeader = styled.div`
  margin-bottom: 20px;
`;

const CardTitle = styled.h2`
  color: #cdd5e0;
  font-size: 20px;
  font-weight: 500;
`;

const CardDescription = styled.p`
  color: #98a3b7;
  font-size: 14px;
  margin-top: 12px;
  height: 36px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
}
`;

const CardBody = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const CardStatWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const CardStat = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
const CardStatName = styled.span`
  color: #98a3b7;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CardUpdates = styled.div`
  color: #98a3b7;
  font-size: 12px;
`;

const Card = ({ repo }: { repo: Repository }) => {
  return (
    <>
      <CardContent>
        <CardHeader>
          <CardTitle>{repo.name}</CardTitle>
          <CardDescription>{repo.description}</CardDescription>
        </CardHeader>
        <CardBody>
          <CardStatWrapper>
            {repo.license && (
              <CardStat title={repo.license?.name}>
                <img src={iconLicence} alt="Licence" />
                <CardStatName>{repo.license?.name}</CardStatName>
              </CardStat>
            )}
            <CardStat title={repo.forks_count?.toString()}>
              <img src={iconNesting} alt="Nesting" />
              <CardStatName>{repo.forks_count}</CardStatName>
            </CardStat>
            <CardStat title={repo.stargazers_count?.toString()}>
              <img src={iconStar} alt="Star" />
              <CardStatName>{repo.stargazers_count}</CardStatName>
            </CardStat>
          </CardStatWrapper>
          <CardUpdates>updated 4 days ago</CardUpdates>
        </CardBody>
      </CardContent>
    </>
  );
};

export default Card;
