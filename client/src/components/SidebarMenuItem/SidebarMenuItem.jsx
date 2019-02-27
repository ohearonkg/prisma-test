import { IconWrapper, SidebarMenuItemWrapper, StyledText } from "./styles";

import PropTypes from "prop-types";
import React from "react";

const SidebarMenuItem = ({ text, icon, onClickFunction }) => (
  <SidebarMenuItemWrapper onClick={onClickFunction}>
    <IconWrapper>{icon}</IconWrapper>
    <StyledText>{text}</StyledText>
  </SidebarMenuItemWrapper>
);

SidebarMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  onClickFunction: PropTypes.func.isRequired
};

const SidebarMenuItemPropTypes = SidebarMenuItem.propTypes;
export { SidebarMenuItemPropTypes };

export default SidebarMenuItem;
