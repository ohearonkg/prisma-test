import React from "react";
import TextInput from "../../components/TextInput/TextInput";

const Signin = () => (
  <>
    <TextInput
      id="Username"
      label="Username"
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
  </>
);

export default Signin;
