import React, { useState, useEffect, useRef } from "react";
import { TabsHeadingWrapper, TabHeading, StyledUnderline } from "./styles";
import PropTypes from "prop-types";

const Tabs = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [underlinePositionStart, setUnderlinePositionStart] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const firstElementRef = useRef(null);

  const handleClick = (e, index) => {
    setCurrentTab(index);
    const previousElementWidth =
      e.target.previousSibling !== null
        ? e.target.previousSibling.getBoundingClientRect().width
        : 0;
    const { width } = e.target.getBoundingClientRect();
    setUnderlinePositionStart(previousElementWidth);
    setUnderlineWidth(width);
  };

  /**
   * Once the component has mounted we
   * use the reference we have to the first
   * tab node to determine the inital width
   * of the underline
   */
  useEffect(() => {
    const { width } = firstElementRef.current.getBoundingClientRect();
    setUnderlineWidth(width);
  }, []);

  return (
    <>
      <TabsHeadingWrapper>
        {tabs.map((navItem, index) => (
          <TabHeading
            key={index}
            onClick={e => handleClick(e, index)}
            active={currentTab === index}
            ref={index === 0 ? firstElementRef : null}
          >
            {navItem.text}
          </TabHeading>
        ))}

        <StyledUnderline
          underlinePositionStart={underlinePositionStart}
          underlineWidth={underlineWidth}
        />
      </TabsHeadingWrapper>

      {/* Rendered Tab Content */}
      <div>
        {tabs.map((navItem, index) => (
          <div key={index} onClick={e => handleClick(e, index)}>
            {currentTab === index && navItem.component}
          </div>
        ))}
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired
    })
  )
};

export default Tabs;
