import React from 'react';
import { MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

const Navigation = () => {
  return (
    <MDBNav
      color="blue-gradient"
      className="expand-lg fixed-top justify-content-center font-weight-bold"
    >
      <MDBNavItem>
        <MDBNavLink className="white-text" to="/login">
          Login
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="white-text" to="/signup">
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

export default Navigation;
