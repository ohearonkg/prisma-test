import { PageHeadingWrapper, StyledForm } from "./styles";
import React, { useState } from "react";

import Button from "../../components/Button/Button";
import { CREATE_USER_MUTATION } from "../../mutations/CREATE_USER_MUTATION";
import { Mutation } from "react-apollo";
import PageHeading from "../../components/PageHeading/PageHeading";
import PropTypes from "prop-types";
import TextInput from "../../components/TextInput/TextInput";

const Signup = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
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
            <TextInput
              id="Username"
              label="Username"
              placeholder=""
              value={username}
              onChangeFunction={setUsername}
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
  );
};

Signup.propTypes = {
  history: PropTypes.object.isRequired
};

export default Signup;
