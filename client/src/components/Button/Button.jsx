import PropTypes from "prop-types";
import React from "react";
import { StyledButton } from "./styles";

const Button = ({ onClickFunction, children, disabled }) => (
  <StyledButton
    onClick={onClickFunction ? onClickFunction() : null}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  onClickFunction: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  disabled: null
};

export default Button;
