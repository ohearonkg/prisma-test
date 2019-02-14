import PropTypes from "prop-types";
import React from "react";

const CustomSelect = ({ options }) => <div>{options[0]} </div>;

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CustomSelect;
