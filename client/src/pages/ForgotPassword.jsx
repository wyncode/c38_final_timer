import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdbreact';

const ForgotPassword = () => {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <MDBCol md="5">
        <MDBRow className="py-4 mt-5"></MDBRow>
        <MDBCard>
          <MDBCardBody>
            <form>
              <p className="h1 text-center py-4 blue-text">Forgot Password?</p>
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
              </div>
              <div className="text-center py-4 mt-3">
                <MDBBtn gradient="blue" type="submit">
                  Email Password
                </MDBBtn>
                <div></div>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
};

export default ForgotPassword;
