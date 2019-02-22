import React, { useState } from "react";

import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";

const Signup = () => {
  return (
    <div>
      <TextInput
        id="Name"
        label="Name"
        placeholder=""
        value=""
        onChangeFunction={() => {}}
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
