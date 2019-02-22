import PropTypes from "prop-types";
import React from "react";
import { StyledCard } from "./styles";

const Card = ({ children, onClickFunction }) => (
  <StyledCard onClick={onClickFunction}>{children}</StyledCard>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  onClickFunction: PropTypes.func.isRequired
};

export default Card;
