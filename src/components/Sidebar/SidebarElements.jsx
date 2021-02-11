import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${({ darkTheme }) => (darkTheme ? "#090909" : "#fafafa")};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${({ darkTheme }) => (darkTheme ? "#00e1ff" : "#0090a3")};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #00e1ff;
`;

export const SidebarLink = styled(LinkS)`
  color: ${({ darkTheme }) => (darkTheme ? "#00e1ff" : "#0090a3")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  height: 80px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.12);
    color: ${({ darkTheme }) => (darkTheme ? "#00bdd6" : "#007180")};
  }
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  padding: 16px 64px;
  color: ${({ darkTheme }) => (darkTheme ? "#00e1ff" : "#0090a3")};
  font-size: 1.5rem;
  outline: none;
  border: 1px solid ${({ darkTheme }) => (darkTheme ? "#00e1ff" : "#0090a3")};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ darkTheme }) => (darkTheme ? "#00e1ff" : "#007180")};
    color: ${({ darkTheme }) => (darkTheme ? "#090909" : "#fafafa")};
  }
`;
