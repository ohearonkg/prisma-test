import SidebarMenuItem, {
  SidebarMenuItemPropTypes
} from "../SidebarMenuItem/SidebarMenuItem";

import PropTypes from "prop-types";
import React from "react";
import { SidebarWrapper } from "./styles";

const SidebarMenu = ({ menuItems }) => (
  <SidebarWrapper>
    {menuItems.map((menuItem, index) => (
      <SidebarMenuItem {...menuItem} key={index} />
    ))}
  </SidebarWrapper>
);

SidebarMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape(SidebarMenuItemPropTypes))
};

export default SidebarMenu;
