import {
  HeaderWrapper,
  NavigationLinkWrapper,
  StyledNavigationLink
} from "./styles";

import { GET_CURRENTLY_LOGGED_IN_USER_QUERY } from "../../queries/GET_CURRENTLY_LOGGED_IN_USER_QUERY";
import { Query } from "react-apollo";
import React from "react";

const Navigation = () => (
  <Query query={GET_CURRENTLY_LOGGED_IN_USER_QUERY}>
    {({ loading, error, data: { currentlyLoggedInUser } }) => {
      if (!loading && !error) {
        return (
          <HeaderWrapper>
            {!currentlyLoggedInUser && (
              <>
                <NavigationLinkWrapper>
                  <StyledNavigationLink to="/signup">
                    Sign Up{" "}
                  </StyledNavigationLink>
                </NavigationLinkWrapper>

                <NavigationLinkWrapper>
                  <StyledNavigationLink to="/signin">
                    Sign In
                  </StyledNavigationLink>
                </NavigationLinkWrapper>
              </>
            )}

            {currentlyLoggedInUser && (
              <NavigationLinkWrapper>
                <StyledNavigationLink to="/signout">
                  Sign Out
                </StyledNavigationLink>
              </NavigationLinkWrapper>
            )}
          </HeaderWrapper>
        );
      }
      return null;
    }}
  </Query>
);

export default Navigation;
