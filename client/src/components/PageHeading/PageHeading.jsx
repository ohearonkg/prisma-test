import PropTypes from "prop-types";
import React from "react";
import { StyledPageHeading } from "./styles";

const PageHeading = ({ children }) => (
  <StyledPageHeading> {children}</StyledPageHeading>
);

PageHeading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default PageHeading;
