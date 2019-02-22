import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

const StyledCard = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 20px;
  min-width: 275px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background: #ffffff;
`;

const Card = ({ children, onClickFunction }) => (
  <StyledCard onClick={onClickFunction}>{children}</StyledCard>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  onClickFunction: PropTypes.func.isRequired
};

export default Card;
