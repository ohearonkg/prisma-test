import PropTypes from "prop-types";
import React from "react";
import { StyledButton } from "./styles";

const Button = ({ onClickFunction, children }) => (
  <StyledButton onClick={onClickFunction ? onClickFunction() : null}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  onClickFunction: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Button;
