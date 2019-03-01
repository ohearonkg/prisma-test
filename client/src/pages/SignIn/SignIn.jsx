import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Button from "../../components/Button/Button";
import { GET_CURRENTLY_LOGGED_IN_USER_QUERY } from "../../queries/GET_CURRENTLY_LOGGED_IN_USER_QUERY";
import Input from "../../components/Input/Input";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";
import { SIGNIN_USER_MUTATION } from "../../mutations/SIGNIN_USER_MUTATION";

const Signin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>KGSM Tracker - Sign In</title>
      </Helmet>

      <Mutation
        mutation={SIGNIN_USER_MUTATION}
        refetchQueries={[{ query: GET_CURRENTLY_LOGGED_IN_USER_QUERY }]}
      >
        {(signinUser, { data }) => (
          <form
            onSubmit={async e => {
              e.preventDefault();
              const {
                data: {
                  signin: { id }
                }
              } = await signinUser({
                variables: {
                  email,
                  password
                }
              });
              history.push(`/user/${id}`);
            }}
          >
            <>
              <Input
                id="Email"
                label="Email"
                placeholder=""
                value={email}
                onChangeFunction={emailInput => setEmail(emailInput)}
              />

              <Input
                id="Password"
                label="Password"
                placeholder=""
                value={password}
                type="password"
                onChangeFunction={passwordInput => setPassword(passwordInput)}
              />

              <Button type="submit"> Sign In</Button>
            </>
          </form>
        )}
      </Mutation>
    </>
  );
};

Signin.propTypes = {
  history: PropTypes.object.isRequired
};

export default Signin;
