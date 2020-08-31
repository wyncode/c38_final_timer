import React from 'react';
import { MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

const Nav = () => {
  return (
    <MDBNav
      style={{ height: '50px' }}
      color="blue-gradient"
      className="expand-lg fixed-top justify-content-center align-items-center"
    >
      <MDBNavItem>
        <MDBNavLink className="white-text font-weight-bold" to="/login">
          Login
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="white-text font-weight-bold" to="/signup">
          Sign Up
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="white-text" to="/faqs">
          FAQs
        </MDBNavLink>
      </MDBNavItem>
    </MDBNav>
  );
};

export default Nav;
