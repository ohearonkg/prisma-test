import { ApolloConsumer, Mutation } from "react-apollo";
import { PageHeadingWrapper, StyledForm } from "./styles";
import React, { useState } from "react";

import Button from "../../components/Button/Button";
import { FIND_USER_QUERY } from "../../queries/FIND_USER_QUERY";
import { GET_CURRENTLY_LOGGED_IN_USER_QUERY } from "../../queries/GET_CURRENTLY_LOGGED_IN_USER_QUERY";
import Input from "../../components/Input/Input";
import PageHeading from "../../components/PageHeading/PageHeading";
import PropTypes from "prop-types";
import { SIGNUP_USER_MUTATION } from "../../mutations/SIGNUP_USER_MUTATION";

const Signup = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [emailUnique, setEmailUnique] = useState(true);

  return (
    <ApolloConsumer>
      {client => (
        <Mutation
          mutation={SIGNUP_USER_MUTATION}
          variables={{ firstname, lastname, email, password }}
          refetchQueries={[{ query: GET_CURRENTLY_LOGGED_IN_USER_QUERY }]}
        >
          {createUserFunction => (
            <>
              <PageHeadingWrapper>
                <PageHeading>Signup</PageHeading>
              </PageHeadingWrapper>
              <StyledForm
                method="post"
                onSubmit={async e => {
                  e.preventDefault();
                  const {
                    data: {
                      signup: { id }
                    }
                  } = await createUserFunction({
                    firstname,
                    lastname,
                    email,
                    password
                  });
                  history.push(`/user/${id}`);
                }}
              >
                <Input
                  id="First Name"
                  label="First Name"
                  placeholder=""
                  value={firstname}
                  onChangeFunction={setFirstName}
                />

                <Input
                  id="Last Name"
                  label="Last Name"
                  placeholder=""
                  value={lastname}
                  onChangeFunction={setLastname}
                />

                <Input
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
                        email: emailInput.toLowerCase()
                      }
                    });

                    user ? setEmailUnique(false) : setEmailUnique(true);
                  }}
                  error={!emailUnique}
                  errorText={`Account with email address ${email} already exists`}
                />

                <Input
                  id="Password"
                  label="Password"
                  placeholder=""
                  value={password}
                  onChangeFunction={setPassword}
                  type="password"
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
