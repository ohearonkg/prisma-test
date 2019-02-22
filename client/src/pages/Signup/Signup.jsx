import React, { useState } from "react";

import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";

const Signup = () => {
  const [userName, setUsername] = useState("");
  return (
    <div>
      <TextInput
        id="Username"
        label="Username"
        placeholder=""
        value={userName}
        onChangeFunction={setUsername}
      />

      <TextInput
        id="Password"
        label="Password"
        placeholder=""
        value=""
        onChangeFunction={() => {}}
      />

      <Button onClickFunction={() => {}}>Signup</Button>
    </div>
  );
};

export default Signup;
