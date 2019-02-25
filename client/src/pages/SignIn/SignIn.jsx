import React, { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
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

      <Button> Sign In</Button>
    </>
  );
};

export default Signin;
