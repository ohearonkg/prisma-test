import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  background: #0b5fff;
  color: white;
  border: 0px;
  padding: 14px 24px;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25px;

  &:focus {
    outline: none;
  }
`;

const Button = ({ onClickFunction, children }) => (
  <StyledButton onClick={onClickFunction ? onClickFunction() : null}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  onClickFunction: PropTypes.func
};

export default Button;
