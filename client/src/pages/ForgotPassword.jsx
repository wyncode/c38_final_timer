import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdbreact';
//import Navigation from '../components/Navigation';

const ForgotPassword = () => {
  return (
    <MDBContainer className="d-flex justify-content-center m-4">
      <MDBCol md="6">
        <MDBCard>
          <MDBCardBody>
            <form>
              <p className="h4 text-center py-4">Forgot Password?</p>
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
                <div>
                  <p>
                    {' '}
                    <Link to="/Login">Login</Link>
                  </p>
                </div>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
};

export default ForgotPassword;
