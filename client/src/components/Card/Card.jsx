import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

const StyledCard = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Card = ({ children, onClickFunction }) => (
  <StyledCard onClick={onClickFunction}>{children}</StyledCard>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  onClickFunction: PropTypes.func.isRequired
};

export default Card;
