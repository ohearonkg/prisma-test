import React, { useState } from "react";

import { ApolloConsumer } from "react-apollo";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ApolloConsumer>
      {client => (
        <form
          onSubmit={async e => {
            e.preventDefault();
            try {
              const data = await client.query({
                query: SIGNIN_USER_QUERY,
                variables: {
                  username,
                  password
                }
              });
            } catch (e) {
              console.log(e);
            }
          }}
        >
          <>
            <Input
              id="Username"
              label="Username"
              placeholder=""
              value={username}
              onChangeFunction={usernameInput => setUsername(usernameInput)}
            />

            <Input
              id="Password"
              label="Password"
              placeholder=""
              value={password}
              onChangeFunction={passwordInput => setPassword(passwordInput)}
            />

            <Button type="submit"> Sign In</Button>
          </>
        </form>
      )}
    </ApolloConsumer>
  );
};

export default Signin;
