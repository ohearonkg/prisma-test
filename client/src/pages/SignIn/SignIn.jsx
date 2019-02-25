import React, { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";

const Signin = () => {
  const [username, setUsername] = useState("");

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
        value=""
        onChangeFunction={() => {}}
      />
    </>
  );
};

export default Signin;
