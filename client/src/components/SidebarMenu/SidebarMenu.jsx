import PropTypes from "prop-types";
import React from "react";
import SidebarMenuItem from "../SidebarMenuItem/SidebarMenuItem";
import { SidebarWrapper } from "./styles";

const SidebarMenu = ({ menuItems, onClickFunction }) => (
  <SidebarWrapper>
    {menuItems.map((menuItem, index) => (
      <SidebarMenuItem
        {...menuItem}
        onClickFunction={onClickFunction}
        key={index}
      />
    ))}
  </SidebarWrapper>
);

SidebarMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired
    })
  ),
  onClickFunction: PropTypes.func.isRequired
};

export default SidebarMenu;
