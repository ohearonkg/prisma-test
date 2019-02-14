import React, { useState } from "react";

import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledInput = styled.input`
  border-radius: 4px;
  padding: 10px 20px;
  border: 1px solid #c4c4c4;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border: 2px solid #0b5fff;
    padding: 9px 19px;
  }
`;

const FormTextInput = ({ placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

FormTextInput.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default FormTextInput;
