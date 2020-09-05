import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbarBrand,
  MDBNavbar
} from 'mdbreact';
import Logout from '../components/Logout';

const UsersNav = () => {
  return (
    <MDBNav
      color="blue-gradient"
      className="fixed-top justify-content-end align-items-center"
      style={{ height: '50px' }}
    >
      <MDBNavbarBrand>
        <MDBNavLink className="white-text " to="/">
          <strong className="white-text h3">WynIt</strong>
        </MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavItem>
        <MDBNavLink className="white-text font-weight-bold" to="/scheduler">
          Scheduler
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="white-text " to="/tasks">
          My Tasks
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBDropdown>
          <MDBDropdownToggle nav caret>
            <MDBIcon icon="user" className="white-text" />
          </MDBDropdownToggle>
          <MDBDropdownMenu className="dropdown-default">
            <MDBDropdownItem href="#!">My Profile</MDBDropdownItem>
            <MDBDropdownItem href="/faqs">FAQs</MDBDropdownItem>
            <Logout />
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavItem>
    </MDBNav>
  );
};

export default UsersNav;
