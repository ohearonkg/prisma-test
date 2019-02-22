import {
  ErrorText,
  ErrorTextWrapper,
  StyledInput,
  StyledLabel
} from "./styles";

import PropTypes from "prop-types";
import React from "react";

const TextInput = ({
  id,
  label,
  placeholder,
  onChangeFunction,
  value,
  error,
  errorText
}) => (
  <>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
    <StyledInput
      error={error}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={event => onChangeFunction(event.target.value)}
      value={value}
      type="text"
    />
    <ErrorTextWrapper error={error}>
      <ErrorText>{errorText}</ErrorText>
    </ErrorTextWrapper>
  </>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChangeFunction: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool,
  errorText: PropTypes.string
};

TextInput.defaultProps = {
  error: false,
  errorText: ""
};

export default TextInput;
