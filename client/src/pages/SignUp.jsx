import React from "react";
import Navigation from '../components/Navigation';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

const SignUp = () => {
  return (
    <MDBContainer className="justify-content-center" fluid>
         <Navigation />
    <MDBRow className="py-4 mt-5">
    </MDBRow>
      <MDBRow className="no-gutters">
      <MDBCol></MDBCol>
        <MDBCol>
          <MDBCard className="py-2">
            <MDBCardBody>
              <form>
                <p className="h1 text-center py-3 blue-text">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Name"
                    icon="user"
                    size="sm"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Email"
                    icon="envelope"
                    size="sm"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    size="sm"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="New password"
                    icon="lock"
                    size="sm"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-2 mt-3">
                  <MDBBtn gradient="blue" type="submit">
                    <strong>Wyn it!</strong>
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignUp;
