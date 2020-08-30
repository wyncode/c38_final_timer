import React from 'react';
import { MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

const Navigation = () => {
  return (
    <MDBNav
      color="blue-gradient"
      className="expand-lg fixed-top justify-content-center"
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
        <MDBNavItem>
          <MDBNavLink
            className="white-text d-flex font-weight-bold"
            to="/stats"
          >
            Stats
          </MDBNavLink>
        </MDBNavItem>
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
