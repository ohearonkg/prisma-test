import { SidebarMenuItemWrapper } from "../../components/SidebarMenuItem/styles";
import { StyledCard } from "../../components/Card/styles";
import styled from "@emotion/styled";
import theme from "../../theme";

const PageWrapper = styled.div`
  display: flex;
  align-items: stretch;
  padding: 20px;
  background: #f4f4f4;
`;

const SidebarWrapper = styled.div`
  flex: 0 0 auto;
  background-color: white;
  box-shadow: -3px 3px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding-left: 20px;
  padding-right: 100px;

  & ${SidebarMenuItemWrapper} {
    padding-top: 20px;

    &:last-child {
      padding-bottom: 20px;
    }
  }
`;

const ContentWraper = styled.div`
  flex: 1 1 auto;
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
  SidebarWrapper,
  ContentWraper,
  CardsWrapper,
  BigCardWrapper,
  SmallCardWrapper,
  AvatarImageWrapper,
  AvatarImage,
  StatsWrapper,
  StatHeading
};
