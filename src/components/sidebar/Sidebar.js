import React from "react";
import styled from 'styled-components'

import PerfectScrollbar from "react-perfect-scrollbar";

import useSidebar from "../../hooks/useSidebar";
import SidebarNav from "./SidebarNav";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

const Sidebar = ({ items, showFooter = true }) => {
  const { isOpen } = useSidebar();

  return (
    <nav className={`sidebar ${!isOpen ? "collapsed" : ""}`}>
      <div className="sidebar-content">
        <PerfectScrollbar>
          <SidebarBrand className="sidebar-brand" href="/">
            <Logo />
            <Title>
              <span className="align-middle me-3">Enghouse</span>
              <span className="align-middle me-3">Networks</span>
            </Title>
          </SidebarBrand>
          <SidebarNav items={items} />
        </PerfectScrollbar>
      </div>
    </nav>
  );
};

export default Sidebar;

const SidebarBrand = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`