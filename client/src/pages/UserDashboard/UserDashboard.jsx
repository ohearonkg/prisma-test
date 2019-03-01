import React, { useState } from "react";
import PropTypes from "prop-types";

const UserDashboard = ({ navItems }) => {
  return <div />;
};

UserDashboard.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired
    })
  )
};

export default UserDashboard;
