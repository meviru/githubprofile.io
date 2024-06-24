import styled from "styled-components";
import { SkeletonAnimation } from "../../styles/GlobalStyles";
import { useContext } from "react";
import { GithubContext } from "../../context";

const InfoCardWrapper = styled.div`
  display: flex;
  padding: 8px 20px;
  align-items: center;
  border-radius: 12px;
  background-color: #111629;
`;

const InfoCardValue = styled.span`
  color: #4b5366;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.25px;
  &.text-white {
    color: #cdd5e0;
  }
`;

const Separator = styled.span`
  width: 1px;
  height: 36px;
  margin: 0 20px;
  background-color: #364153;
`;

const CountSkeleton = styled.div`
  position: relative;
  height: 15px;
  width: 60px;
  overflow: hidden;
  border-radius: 4px;
  background-color: #20293a;
  &:before {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background-image: linear-gradient(to right, #20293a 0%, rgba(255,255,255,0.15) 20%, #20293a 40%, #20293a 100%);
        background-repeat: no-repeat;
        background-size: 450px 400px;
        animation: ${SkeletonAnimation} 1s linear infinite;
    }
`


const InfoCard = ({
  title,
  description,
}: {
  title: string | undefined;
  description: string | number | undefined;
}) => {
  const { isLoading } = useContext(GithubContext);
  return (
    <InfoCardWrapper>
      <InfoCardValue>{title}</InfoCardValue>
      <Separator />
      {isLoading ? <CountSkeleton /> :
        description === 0 || !!description ? <InfoCardValue className="text-white">{description}</InfoCardValue> : <InfoCardValue className="text-white">N/A</InfoCardValue>
      }
    </InfoCardWrapper >
  );
};

export default InfoCard;
