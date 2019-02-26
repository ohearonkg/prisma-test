import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import theme from "../../theme";

const HeaderWrapper = styled.nav`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  background: ${theme.color.darkBlue};
  min-height: 59px;
`;

const NavigationLinkWrapper = styled.div`
  padding: 20px;
`;

const StyledNavigationLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: ${theme.font.Roboto};
  transition: all 0.1s ease-in-out;

  &:hover {
    color: ${theme.color.yellow};
  }
`;

export { HeaderWrapper, NavigationLinkWrapper, StyledNavigationLink };
