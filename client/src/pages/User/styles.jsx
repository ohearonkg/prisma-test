import { StyledCard } from "../../components/Card/styles";
import styled from "@emotion/styled";
import theme from "../../theme";

const PageWrapper = styled.div`
  display: flex;
  align-items: stretch;
  padding: 20px;
  background: #f4f4f4;
`;

const ContentWraper = styled.div`
  flex: 1 1 auto;
  padding-left: 20px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BigCardWrapper = styled.div`
  flex: 1 1 calc(calc(100% - 10px) / 2);

  & ${StyledCard} {
    width: 100%;
  }

  &:nth-child(odd) {
    padding-right: 10px;
  }
`;

const SmallCardWrapper = styled.div`
  padding-top: 20px;
  flex: 1 1 calc(calc(100% - 20px) / 3);

  & ${StyledCard} {
    width: 100%;
  }

  &:nth-child(even) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const AvatarImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

const AvatarImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StatsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StatHeading = styled.span`
  text-transform: uppercase;
  font-family: ${theme.font.Roboto};
  font-weight: 500;
  display: block;
`;

export {
  PageWrapper,
  ContentWraper,
  CardsWrapper,
  BigCardWrapper,
  SmallCardWrapper,
  AvatarImageWrapper,
  AvatarImage,
  StatsWrapper,
  StatHeading
};
