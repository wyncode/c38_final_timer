import React, { useState, useContext } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBAnimation
} from 'mdbreact';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';
import Time from '../Assets/BlueClock.mp4';

const SignUp = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log('Made it');
    try {
      const response = await axios.post('/api/users', formData);
      const token = response.data.token;
      localStorage.setItem('token', token);
      setCurrentUser(response.data.user);
      history.push('/');
    } catch (error) {
      swal('SignUp Error', error);
    }
  };

  return (
    <MDBContainer className="justify-content-center" fluid>
      <video
        autoPlay
        loop
        muted
        style={{
          objectFit: 'cover',
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0
        }}
      >
        <source src={Time} type="video/mp4" />
      </video>
      <MDBRow className="py-4 mt-5"></MDBRow>
      <MDBRow className="no-gutters">
        <MDBCol></MDBCol>
        <MDBCol>
          <MDBAnimation type="bounceInDown" duration="700ms">
            <MDBCard className="py-2">
              <MDBCardBody>
                <form onSubmit={handleSignUp}>
                  <p className="h1 text-center py-3 blue-text">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Name"
                      name="name"
                      icon="user"
                      size="sm"
                      group
                      type="text"
                      onChange={handleChange}
                    />
                    <MDBInput
                      label="Email"
                      name="email"
                      icon="envelope"
                      size="sm"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      onChange={handleChange}
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
                      name="password"
                      icon="lock"
                      size="sm"
                      group
                      type="password"
                      validate
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-center py-2 mt-2">
                    <MDBBtn gradient="blue" type="submit">
                      <strong>Wyn it!</strong>
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignUp;
