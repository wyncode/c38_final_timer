import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

const Navigation = () => {
  return (
    <BrowserRouter>
      <MDBNav color="blue-gradient" className="expand-lg justify-content-center font-weight-bold">
        <MDBNavItem>
          <MDBNavLink className="white-text" active to="/login">
            Login
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="white-text" to="/signup">Sign Up</MDBNavLink>
        </MDBNavItem>
    <MDBNavItem>
          <MDBNavLink className="white-text" to="/faqs">FAQs</MDBNavLink>

        </MDBNavItem>
      </MDBNav>
    </BrowserRouter>
  );
};

export default Navigation;
