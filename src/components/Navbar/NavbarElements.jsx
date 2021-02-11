import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#f3f2f2" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  font-size: 1rem;
  margin-top: -80px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  @media (prefers-color-scheme: dark) {
    background: ${({ scrollNav }) => (scrollNav ? "#090909" : "transparent")};
  }
  @media (prefers-color-scheme: light) {
    background: ${({ scrollNav }) => (scrollNav ? "#fafafa" : "transparent")};
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 850px;

  @media screen and (max-width: 768px) {
    max-width: 200px;
    position: absolute;
    left: -30px;
  }
`;

export const NavLogo = styled(LinkR)`
  color: ${({ darkTheme }) => (darkTheme ? "#00e1ff" : "#0090a3")};
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 48px;
  text-decoration: none;
  letter-spacing: 3.5px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ darkTheme }) => (darkTheme ? "#00e1ff" : "#0090a3")};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding-right: 48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: ${({ darkTheme }) => (darkTheme ? "#00e1ff" : "#0090a3")};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
  height: 100%;
  font-size: 1.3rem;
  margin: 0 10px;
  font-weight: 500;

  &.active {
    border-bottom: 3px solid
      ${({ darkTheme }) => (darkTheme ? "#00e1ff" : "#0090a3")};
  }

  &:hover {
    transform: scale(1.05);
    color: ${({ darkTheme }) => (darkTheme ? "#00e1ff" : "#007180")};
    border-bottom: 3px solid
      ${({ darkTheme }) => (darkTheme ? "#00e1ff" : "#007180")};
  }
`;

export const NavBtn = styled.div`
  padding: 0 1rem;
  margin: 0 10px;
  display: flex;
  align-items: start;

  media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  white-space: no-wrap;
  padding: 10px 22px;
  color: ${({ darkTheme }) => (darkTheme ? "#00b4cc" : "#0090a3")};
  font-size: 1.1rem;
  outline: none;
  border: 1px solid ${({ darkTheme }) => (darkTheme ? "#00b4cc" : "#0090a3")};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: "Ubuntu", sans-serif;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ darkTheme }) => (darkTheme ? "#00b4cc" : "#0090a3")};
    border: 1px solid ${({ darkTheme }) => (darkTheme ? "#00b4cc" : "#0090a3")};
    color: #090909;
  }
`;
