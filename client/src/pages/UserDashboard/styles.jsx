import styled from "@emotion/styled";
import theme from "../../theme";

const TabsHeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const TabHeading = styled.span`
  flex: 0 0 auto;
  font-family: ${theme.font.Roboto};
  font-weight: ${props => (props.active ? 500 : 300)};
  color: ${props => (props.active ? theme.color.yellow : "black")};
  transition: all 0.1s ease-in-out;

  &:first-child {
    padding-right: 20px;
  }

  &:nth-child(n + 2) {
    padding: 0 20px;
  }
  cursor: pointer;

  &:hover {
    color: ${theme.color.yellow};
  }
`;

export { TabsHeadingWrapper, TabHeading };
