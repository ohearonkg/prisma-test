import React, { useState } from "react";

import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 4px;
  padding: 10px 20px;
  border: 1px solid #c4c4c4;
  font-family: "Roboto", sans-serif;
  font-size: 14px;

  &:focus {
    outline: none;
    border: 2px solid #0b5fff;
    padding: 9px 19px;
  }
`;

const StyledLabel = styled.label`
  display: block;
`;

const TextInput = ({ id, label, placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default TextInput;
