import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
import PDF from "../../Resume.pdf";

const Sidebar = ({ isOpen, toggle }) => {
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
    <SidebarContainer isOpen={isOpen} darkTheme={darkTheme}>
      <Icon onClick={toggle}>
        <CloseIcon darkTheme={darkTheme} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            darkTheme={darkTheme}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="projects"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            darkTheme={darkTheme}
          >
            Projects
          </SidebarLink>
          <SidebarLink
            to="contact"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            darkTheme={darkTheme}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            to={PDF}
            target="_blank"
            rel="noreferrer"
            onClick={toggle}
            darkTheme={darkTheme}
          >
            Resume
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
