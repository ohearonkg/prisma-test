import React, { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import { ApolloConsumer } from "react-apollo";
import { SIGNIN_USER_QUERY } from "../../queries/SIGNIN_USER_QUERY";

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
              console.log(data);
            } catch (e) {
              console.log(e);
            }
          }}
        >
          <TextInput
            id="Username"
            label="Username"
            placeholder=""
            value={username}
            onChangeFunction={usernameInput => setUsername(usernameInput)}
          />

          <TextInput
            id="Password"
            label="Password"
            placeholder=""
            value={password}
            onChangeFunction={passwordInput => setPassword(passwordInput)}
          />

          <Button type="submit"> Sign In</Button>
        </form>
      )}
    </ApolloConsumer>
  );
};

export default Signin;
