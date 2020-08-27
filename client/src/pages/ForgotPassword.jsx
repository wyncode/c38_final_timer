import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBAnimation
} from 'mdbreact';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`/api/password?email=${email}`)
      .then((response) => {
        alert('Password email sent');
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  return (
    <MDBContainer className="d-flex justify-content-center">
      <MDBCol md="5">
        <MDBRow className="py-4 mt-5"></MDBRow>
        <MDBAnimation type="bounceInDown" duration="600ms">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h1 text-center py-4 blue-text">
                  Forgot Password?
                </p>
                <div className="grey-text">
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn gradient="blue" type="submit" onClick={handleSubmit}>
                    Email Password
                  </MDBBtn>
                  <div></div>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBAnimation>
      </MDBCol>
    </MDBContainer>
  );
};

export default ForgotPassword;
