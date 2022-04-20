import React from "react";

import { Dropdown } from "react-bootstrap";

// import { FiPieChart, FiSettings, FiUser } from "react-icons/fi";

import avatar1 from "../../assets/img/avatars/avatar.jpg";

const NavbarUser = () => {
  return (
    <Dropdown className="nav-item" align="end">
      <span className="d-inline-block d-sm-none">
        <Dropdown.Toggle as="a" className="nav-link">
          {/* <FiSettings size={18} className="align-middle" /> */}
        </Dropdown.Toggle>
      </span>
      <span className="d-none d-sm-inline-block">
        <Dropdown.Toggle as="a" className="nav-link">
          <img
            src={avatar1}
            className="avatar img-fluid rounded-circle me-1"
            alt="Chris Wood"
          />
          <span className="text-dark">Chris Wood</span>
        </Dropdown.Toggle>
      </span>
      <Dropdown.Menu drop="end">
        <Dropdown.Item>
          {/* <FiUser size={18} className="align-middle me-2" /> */}
          Profile
        </Dropdown.Item>
        <Dropdown.Item>
          {/* <FiPieChart size={18} className="align-middle me-2" /> */}
          Analytics
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>FiSettings & Privacy</Dropdown.Item>
        <Dropdown.Item>Help</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavbarUser;