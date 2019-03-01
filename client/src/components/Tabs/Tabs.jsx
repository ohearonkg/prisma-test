import React, { useState, useEffect, useRef } from "react";
import {
  TabsHeadingWrapper,
  TabHeading,
  StyledUnderline,
  TabContentWrapper
} from "./styles";
import PropTypes from "prop-types";

const Tabs = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [underlinePositionStart, setUnderlinePositionStart] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const wrapperRef = useRef(null);
  const firstElementRef = useRef(null);

  const handleClick = (e, index) => {
    setCurrentTab(index);

    /**
     * Get the offset from the viewport
     * of our wrapping div
     */
    const {
      x: wrapperOffset
    } = firstElementRef.current.getBoundingClientRect();

    /**
     * The current position and width of the tab
     * on which we have clicked
     */
    const { x: currentItemLocation, width } = e.target.getBoundingClientRect();

    const underlineLocationStart = currentItemLocation - wrapperOffset;

    setUnderlinePositionStart(underlineLocationStart);
    setUnderlineWidth(width);
  };

  /**
   * Once the component has mounted we
   * use the reference we have to the first
   * renderd tab node to determine the inital width
   * of the underline
   */
  useEffect(() => {
    const { width } = firstElementRef.current.getBoundingClientRect();
    setUnderlineWidth(width);
  }, []);

  return (
    <>
      <TabsHeadingWrapper ref={wrapperRef}>
        {tabs.map((navItem, index) => (
          <TabHeading
            key={`${navItem.title}-content`}
            onClick={e => handleClick(e, index)}
            active={currentTab === index}
            ref={index === 0 ? firstElementRef : null}
          >
            {navItem.title}
          </TabHeading>
        ))}
        <StyledUnderline
          underlinePositionStart={underlinePositionStart}
          underlineWidth={underlineWidth}
        />
      </TabsHeadingWrapper>

      {/* Rendered Tab Content */}
      <TabContentWrapper>{tabs[currentTab].component}</TabContentWrapper>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired
    })
  ).isRequired
};

export default Tabs;
