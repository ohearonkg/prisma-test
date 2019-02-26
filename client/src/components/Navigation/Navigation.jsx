import {
  HeaderWrapper,
  NavigationLinkWrapper,
  StyledNavigationLink
} from "./styles";
import { Mutation, Query } from "react-apollo";

import { GET_CURRENTLY_LOGGED_IN_USER_QUERY } from "../../queries/GET_CURRENTLY_LOGGED_IN_USER_QUERY";
import PropTypes from "prop-types";
import React from "react";
import { SIGNOUT_USER_MUTATION } from "../../mutations/SIGNOUT_USER_MUTATION";
import { withRouter } from "react-router-dom";

const Navigation = ({ history }) => (
  <Query query={GET_CURRENTLY_LOGGED_IN_USER_QUERY}>
    {({ loading, error, data: { currentlyLoggedInUser } }) => {
      if (!loading && !error) {
        return (
          <HeaderWrapper>
            {!currentlyLoggedInUser && (
              <>
                <NavigationLinkWrapper>
                  <StyledNavigationLink to="/signup">
                    Sign Up
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
              <Mutation
                mutation={SIGNOUT_USER_MUTATION}
                refetchQueries={[{ query: GET_CURRENTLY_LOGGED_IN_USER_QUERY }]}
              >
                {signout => (
                  <NavigationLinkWrapper>
                    <StyledNavigationLink
                      to="#"
                      onClick={async () => {
                        await signout();
                        history.push("/");
                      }}
                    >
                      Sign Out
                    </StyledNavigationLink>
                  </NavigationLinkWrapper>
                )}
              </Mutation>
            )}
          </HeaderWrapper>
        );
      }
      return null;
    }}
  </Query>
);

Navigation.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Navigation);
