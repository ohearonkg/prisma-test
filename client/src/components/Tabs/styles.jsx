import styled from "@emotion/styled";
import theme from "../../theme";

const TabsHeadingWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const TabHeading = styled.span`
  flex: 0 0 auto;
  font-family: ${theme.font.Roboto};
  font-weight: ${props => (props.active ? 500 : 300)};
  color: ${props => (props.active ? theme.color.yellow : "black")};
  transition: all 0.1s ease-in-out;
  padding: 0 20px;
  cursor: pointer;

  &:hover {
    color: ${theme.color.yellow};
  }
`;

const StyledUnderline = styled.div`
  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  height: 2px;
  background: ${theme.color.yellow};
  position: absolute;
  left: ${({ underlinePositionStart }) => underlinePositionStart}px;
  width: ${({ underlineWidth }) => underlineWidth}px;
  bottom: 0;
`;

const TabContentWrapper = styled.div`
  padding-top: 10px;
`;

export { TabsHeadingWrapper, TabHeading, StyledUnderline, TabContentWrapper };
