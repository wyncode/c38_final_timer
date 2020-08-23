import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

const Navigation = () => {
  return (
    <BrowserRouter>
      <MDBNav className="justify-content-end">
        <MDBNavItem>
          <MDBNavLink active to="#!">
            Login
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="#!">Sign Up</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="#!">FAQs</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink disabled to="#!">
            My Tasks
          </MDBNavLink>
          <MDBNavLink disabled to="#!">
            My Stats
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
    </BrowserRouter>
  );
};

export default Navigation;
