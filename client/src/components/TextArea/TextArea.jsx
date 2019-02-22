import { StyledLabel, StyledTextArea } from "./styles";

import PropTypes from "prop-types";
import React from "react";

const TextArea = ({ id, label, placeholder, onChangeFunction, value }) => (
  <>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
    <StyledTextArea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={event => onChangeFunction(event.target.value)}
    />
  </>
);

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChangeFunction: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default TextArea;
