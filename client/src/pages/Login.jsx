import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdbreact';

const Login = () => {
  return (
    <MDBContainer className="d-flex justify-content-center m-4">
      <MDBCol md="6">
        <MDBCard>
          <MDBCardBody>
            <form>
              <p className="h4 text-center py-4">Login</p>
              <div className="grey-text">
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center py-4 mt-3">
                <MDBBtn gradient="blue" type="submit">
                  Login
                </MDBBtn>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
};

export default Login;
