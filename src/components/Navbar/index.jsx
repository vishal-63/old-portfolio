import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import PDF from "../../Resume.pdf";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  let darkTheme = true;

  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const userPrefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  if (userPrefersDark) {
    darkTheme = true;
  }

  if (userPrefersLight) {
    darkTheme = false;
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome} darkTheme={darkTheme}>
            VISHAL
          </NavLogo>
        </NavbarContainer>
        <MobileIcon onClick={toggle} darkTheme={darkTheme}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              darkTheme={darkTheme}
            >
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              darkTheme={darkTheme}
            >
              Projects
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              darkTheme={darkTheme}
            >
              Contact
            </NavLinks>
          </NavItem>
          <NavBtn>
            <NavBtnLink
              to={PDF}
              target="_blank"
              rel="noreferrer"
              darkTheme={darkTheme}
            >
              Resume
            </NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
