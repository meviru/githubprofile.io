import styled from "styled-components";

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

const InfoCard = ({
  title,
  description,
}: {
  title: string | undefined;
  description: string | number | undefined;
}) => {
  return (
    <InfoCardWrapper>
      <InfoCardValue>{title}</InfoCardValue>
      <Separator />
      <InfoCardValue className="text-white">{description}</InfoCardValue>
    </InfoCardWrapper>
  );
};

export default InfoCard;
