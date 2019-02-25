import {
  HeaderWrapper,
  NavigationLinkWrapper,
  StyledNavigationLink
} from "./styles";

import React from "react";

const Header = () => (
  <HeaderWrapper>
    <NavigationLinkWrapper>
      <StyledNavigationLink to="/createExercise">
        Add Exercise
      </StyledNavigationLink>
    </NavigationLinkWrapper>

    <NavigationLinkWrapper>
      <StyledNavigationLink to="/signup">Sign Up </StyledNavigationLink>
    </NavigationLinkWrapper>

    <NavigationLinkWrapper>
      <StyledNavigationLink to="/signin">Sign In</StyledNavigationLink>
    </NavigationLinkWrapper>
  </HeaderWrapper>
);

export default Header;
