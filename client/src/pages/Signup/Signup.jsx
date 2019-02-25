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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailUnique, setEmailUnique] = useState(true);

  return (
    <ApolloConsumer>
      {client => (
        <Mutation
          mutation={CREATE_USER_MUTATION}
          variables={{ email, password }}
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
                    email,
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
                  id="Email"
                  label="Email"
                  placeholder=""
                  value={email}
                  onChangeFunction={async emailInput => {
                    setEmail(emailInput);
                    const {
                      data: { user }
                    } = await client.query({
                      query: FIND_USER_QUERY,
                      variables: {
                        email: emailInput
                      }
                    });

                    user ? setEmailUnique(false) : setEmailUnique(true);
                  }}
                  error={!emailUnique}
                  errorText={`Account with email address ${email} already exists`}
                />

                <TextInput
                  id="Password"
                  label="Password"
                  placeholder=""
                  value={password}
                  onChangeFunction={setPassword}
                />

                <Button
                  disabled={
                    !emailUnique || email.length === 0 || password.length === 0
                  }
                  type="submit"
                >
                  Signup
                </Button>
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
