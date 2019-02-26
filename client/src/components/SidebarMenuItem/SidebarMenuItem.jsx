import PropTypes from "prop-types";
import React from "react";

const SidebarMenuItem = ({ text }) => <div>{text}</div>;

SidebarMenuItem.propTypes = {
  text: PropTypes.string.isRequired
};

export default SidebarMenuItem;
