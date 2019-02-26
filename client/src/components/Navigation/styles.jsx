import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const HeaderWrapper = styled.nav`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  background: #262b47;
  min-height: 59px;
`;

const NavigationLinkWrapper = styled.div`
  padding: 20px;
`;

const StyledNavigationLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: "Roboto", sans-serif;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: #e8d214;
  }
`;

export { HeaderWrapper, NavigationLinkWrapper, StyledNavigationLink };
