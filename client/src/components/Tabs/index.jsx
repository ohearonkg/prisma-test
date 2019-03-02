import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  TabsHeadingWrapper,
  TabHeading,
  TabContentWrapper,
  StyledUnderline
} from "./styles";

/**
 * Interating through the children
 * assigning the correct active prop t
 * to the approprriate title
 */
export const TabList = ({ children, activeIndex, setActiveIndex }) => (
  <TabsHeadingWrapper>
    {children.map((child, index) =>
      activeIndex === index
        ? React.cloneElement(child, {
            active: true,
            key: `TabHeading-${index}`,
            setActiveIndex,
            index
          })
        : React.cloneElement(child, {
            setActiveIndex,
            index,
            key: `TabHeading-${index}`
          })
    )}
  </TabsHeadingWrapper>
);

TabList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  activeIndex: PropTypes.number,
  setActiveIndex: PropTypes.func
};

/**
 * Rendering a single child and
 * adding appropriate styles
 */
export const Tab = ({ children, active, setActiveIndex, index }) => (
  <TabHeading active={active} onClick={() => setActiveIndex(index)}>
    {children}
  </TabHeading>
);

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number,
  setActiveIndex: PropTypes.func
};

/**
 * Taking the children to be rendered
 * and rendering the content at the appropriate
 * index
 */
export const TabPanels = ({ children, activeIndex }) => (
  <TabContentWrapper>{children[activeIndex]}</TabContentWrapper>
);

TabPanels.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  activeIndex: PropTypes.number
};

/**
 * Single Tab Content Item
 */
export const TabPanel = ({ children }) => children;

TabPanel.propTypes = {
  children: PropTypes.node.isRequired
};

/**
 * The real component
 */
const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cloned = React.Children.map(children, child => {
    if (child.type === TabPanels) {
      return React.cloneElement(child, { activeIndex, setActiveIndex });
    }
    if (child.type === TabList) {
      return React.cloneElement(child, {
        activeIndex,
        setActiveIndex
      });
    } else {
      return child;
    }
  });
  return <>{cloned}</>;
};

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Tabs;
