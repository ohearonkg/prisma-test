import React, { useState } from "react";

import Button from "../../components/Button/Button";
import PropTypes from "prop-types";
import TextInput from "../../components/TextInput/TextInput";

const Signup = ({ createUserFunction }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    createUserFunction();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          value={password}
          onChangeFunction={setPassword}
        />

        <Button type="submit" onClickFunction={() => {}}>
          Signup
        </Button>
      </form>
    </>
  );
};

Signup.propTypes = {
  createUserFunction: PropTypes.func.isRequired
};

export default Signup;
