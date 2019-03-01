import React, { useState } from "react";
import PropTypes from "prop-types";

const UserDashboard = ({ navItems }) => {
  const [currentTab, setCurrentTab] = useState(navItems[0]);
  return (
    <div>
      {navItems.map((navItem, index) => (
        <div key={index} onClick={() => setCurrentTab(navItems[index])}>
          {navItem.text}
        </div>
      ))}

      <div>
        <h1>{currentTab.component}</h1>
      </div>
    </div>
  );
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
