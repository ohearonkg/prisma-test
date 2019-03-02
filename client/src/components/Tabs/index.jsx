import React, { useState } from "react";
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
export const TabList = ({ children, activeIndex, handleClick }) => (
  <TabsHeadingWrapper>
    {children.map((child, index) =>
      activeIndex === index
        ? React.cloneElement(child, {
            active: true,
            key: `TabHeading-${index}`,
            handleClick,
            index
          })
        : React.cloneElement(child, {
            handleClick,
            index,
            key: `TabHeading-${index}`
          })
    )}
    <StyledUnderline underlinePositionStart={0} underlineWidth={0} />
  </TabsHeadingWrapper>
);

TabList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  activeIndex: PropTypes.number,
  handleClick: PropTypes.func
};

/**
 * Rendering a single child and
 * adding appropriate styles
 */
export const Tab = ({ children, active, handleClick, index }) => (
  <TabHeading active={active} onClick={e => handleClick(e, index)}>
    {children}
  </TabHeading>
);

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number,
  handleClick: PropTypes.func
};

TabList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  activeIndex: PropTypes.number
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
const Tabs = props => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, index) => {
    setActiveIndex(index);
  };

  const cloned = React.Children.map(props.children, child => {
    if (
      child.type.displayName === "TabPanels" ||
      child.type.displayName === "TabList"
    ) {
      return React.cloneElement(child, { activeIndex, handleClick });
    }
    return child;
  });
  return <>{cloned}</>;
};

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Tabs;
