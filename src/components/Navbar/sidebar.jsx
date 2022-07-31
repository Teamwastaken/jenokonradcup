import React from "react";
import {
  Icon,
  SidebarContainer,
  SidebarLink,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
} from "./sidebarStyles";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/map">Karte</SidebarLink>
          <SidebarLink to="/about">Über uns</SidebarLink>
          <SidebarLink to="/more-info">Mehr Infos</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;
