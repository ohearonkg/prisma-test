import { GET_PROGRAMS_QUERY } from "../../queries/GET_PROGRAMS_QUERY";
import { GET_USER_PROFILE_QUERY } from "../../queries/GET_USER_PROFILE_QUERY";
import { Query } from "react-apollo";
import React from "react";

const User = ({ userId }) => (
  <>
    <Query query={GET_USER_PROFILE_QUERY} variables={{ id: userId }}>
      {({ loading, error, data: { userProfile } }) => {
        if (error) {
          return <h2>Error</h2>;
        }
        if (loading) {
          return <h2>Loading</h2>;
        }
        if (!loading && !error && userProfile) {
          return (
            <div>
              Welcome Back {userProfile.firstname} {userProfile.lastname}
            </div>
          );
        }
      }}
    </Query>

    {/* User's Programs */}
    <Query query={GET_PROGRAMS_QUERY} variables={{ userID: userId }}>
      {({ loading, error, data: { programs } }) => {
        if (error) {
          return <h2>Error</h2>;
        }
        if (loading) {
          return <h2>Loading</h2>;
        }
        return (
          <>
            <h2>Your Programs</h2>
            {programs.length > 0 &&
              programs.map(program => <span> Program</span>)}
            {programs.length === 0 && <div>You have no programs. Add One</div>}
          </>
        );
      }}
    </Query>
  </>
);

export default User;
