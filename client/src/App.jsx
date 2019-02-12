import { Query } from "react-apollo";
import React from "react";
import gql from "graphql-tag";

const App = () => (
  <Query query={GET_USERS_QUERY}>
    {({ data: { users }, error, loading }) => {
      if (loading) {
        return <div>Loading</div>;
      }
      if (error) {
        return <div> Erro</div>;
      }
      return (
        <div>
          <ul>
            {users.map(user => (
              <li key={user.id}> {user.name} </li>
            ))}
          </ul>
        </div>
      );
    }}
  </Query>
);

export default App;

const GET_USERS_QUERY = gql`
  query GET_USERS_QUERY {
    users {
      id
      name
    }
  }
`;
