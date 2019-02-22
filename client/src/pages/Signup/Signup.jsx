import { ApolloConsumer, Mutation } from "react-apollo";
import { PageHeadingWrapper, StyledForm } from "./styles";
import React, { useState } from "react";

import Button from "../../components/Button/Button";
import { CREATE_USER_MUTATION } from "../../mutations/CREATE_USER_MUTATION";
import { FIND_USER_QUERY } from "../../queries/FIND_USER_QUERY";
import PageHeading from "../../components/PageHeading/PageHeading";
import PropTypes from "prop-types";
import TextInput from "../../components/TextInput/TextInput";

const Signup = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameUnique, setUsernameUnique] = useState(true);

  return (
    <ApolloConsumer>
      {client => (
        <Mutation
          mutation={CREATE_USER_MUTATION}
          variables={{ username, password }}
        >
          {createUserFunction => (
            <>
              <PageHeadingWrapper>
                <PageHeading>Signup</PageHeading>
              </PageHeadingWrapper>
              <StyledForm
                onSubmit={e => {
                  e.preventDefault();
                  createUserFunction({
                    username,
                    password
                  }).then(result => {
                    const {
                      data: {
                        createUser: { id }
                      }
                    } = result;
                    history.push(`/user/${id}`);
                  });
                }}
              >
                <div
                  style={{
                    maxHeight: usernameUnique ? "0px" : "",
                    border: usernameUnique ? "0px" : "1px solid red",
                    overflow: "hidden"
                  }}
                >
                  Username is no unique
                </div>
                <TextInput
                  id="Username"
                  label="Username"
                  placeholder=""
                  value={username}
                  onChangeFunction={async usernameInput => {
                    setUsername(usernameInput);
                    const {
                      data: { users }
                    } = await client.query({
                      query: FIND_USER_QUERY,
                      variables: {
                        username: usernameInput
                      }
                    });

                    if (users.length > 0) {
                      setUsernameUnique(false);
                    }
                  }}
                />

                <TextInput
                  id="Password"
                  label="Password"
                  placeholder=""
                  value={password}
                  onChangeFunction={setPassword}
                />

                <Button type="submit">Signup</Button>
              </StyledForm>
            </>
          )}
        </Mutation>
      )}
    </ApolloConsumer>
  );
};

Signup.propTypes = {
  history: PropTypes.object.isRequired
};

export default Signup;
