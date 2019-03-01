import React, { useState } from "react";
import PropTypes from "prop-types";
import { TabsHeadingWrapper, TabHeading } from "./styles";

const UserDashboard = ({ navItems }) => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div>
      <TabsHeadingWrapper>
        {navItems.map((navItem, index) => (
          <div key={index} onClick={() => setCurrentTab(index)}>
            <TabHeading active={currentTab === index}>
              {navItem.text}
            </TabHeading>
          </div>
        ))}
      </TabsHeadingWrapper>

      <div>
        <h1>{navItems[currentTab].component}</h1>
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
