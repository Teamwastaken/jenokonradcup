import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../img/logo.avif";
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
} from "./navbarStyles";
const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="../">
          <img className="w-5/6" src={logo} alt="" />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/map">Karte</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/about">Über uns</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="more-info">Mehr Infos</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
