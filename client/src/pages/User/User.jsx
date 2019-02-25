import { GET_USER_PROFILE_QUERY } from "../../queries/GET_USER_PROFILE_QUERY";
import { Query } from "react-apollo";
import React from "react";

const User = ({ userId }) => (
  <Query query={GET_USER_PROFILE_QUERY} variables={{ id: userId }}>
    {({ loading, error, data: { userProfile } }) => {
      if (error) {
        return <h2>Error</h2>;
      }
      if (loading) {
        return <h2>Loading</h2>;
      }
      if (!loading && !error && userProfile) {
        return <div> Welcome Back {userProfile.email} </div>;
      }
    }}
  </Query>
);

export default User;
