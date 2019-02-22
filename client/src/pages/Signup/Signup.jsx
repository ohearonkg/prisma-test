import { FormWrapper, PageHeadingWrapper } from "./styles";
import React, { useState } from "react";

import Button from "../../components/Button/Button";
import PageHeading from "../../components/PageHeading/PageHeading";
import PropTypes from "prop-types";
import TextInput from "../../components/TextInput/TextInput";

const Signup = ({ createUserFunction }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    createUserFunction({
      userName,
      password
    });
  };

  return (
    <>
      <PageHeadingWrapper>
        <PageHeading>Signup</PageHeading>
      </PageHeadingWrapper>
      <FormWrapper>
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
      </FormWrapper>
    </>
  );
};

Signup.propTypes = {
  createUserFunction: PropTypes.func.isRequired
};

export default Signup;
