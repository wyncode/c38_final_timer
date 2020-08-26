import React, { useState, useContext } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdbreact';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

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
      console.log('SignUp Error: ', error);
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('');

    const responseGoogle = (res) => {
      setName(res.profileObj.name);
      setEmail(res.profileObj.email);
      setUrl(res.profileObj.imageUrl);
    };
  };
  return (
    <MDBContainer className="justify-content-center" fluid>
      <MDBRow className="py-4 mt-5"></MDBRow>
      <MDBRow className="no-gutters">
        <MDBCol></MDBCol>
        <MDBCol>
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
                  <GoogleLogin
                    clientId="33101661602-9id17jok8tt69u06d8kme2r7s9r6s2em.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
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
