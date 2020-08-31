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
  MDBIcon
} from 'mdbreact';

const UsersNav = () => {
  return (
    <MDBNav
      color="blue-gradient"
      className="expand-lg fixed-top justify-content-end"
    >
      <MDBNavItem>
        <MDBNavLink className="white-text font-weight-bold" to="/tasks">
          My Tasks
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="white-text" to="/stats">
          Stats
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="white-text" to="/calendar">
          Calendar
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBDropdown>
          <MDBDropdownToggle nav caret>
            <MDBIcon icon="user" className="white-text" />
          </MDBDropdownToggle>
          <MDBDropdownMenu className="dropdown-default">
            <MDBDropdownItem href="#!">My Profile</MDBDropdownItem>
            <MDBDropdownItem href="/logout">
              {' '}
              <Link to="/login">Logout</Link>
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavItem>
    </MDBNav>
  );
};

export default UsersNav;
