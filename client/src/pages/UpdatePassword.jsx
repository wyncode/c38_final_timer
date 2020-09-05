import React, { useState } from 'react';
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
import axios from 'axios';
import swal from 'sweetalert';

const UpdatePassword = ({ history }) => {
  const [password, setPassword] = useState(null);

  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.password !== password.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    axios
      .put(
        '/api/password',
        { password: password.password },
        { withCredentials: true }
      )
      .then((response) => {
        swal('Password successfully changed!');
        history.push('/login');
      })
      .catch((error) => swal('Could not update password!'));
  };
  return (
    <MDBContainer className="d-flex justify-content-center">
      <MDBCol md="5">
        <MDBRow className="py-4 mt-5"></MDBRow>
        <MDBAnimation type="bounceInDown" duration="600ms">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={handleSubmit}>
                <p className="h1 text-center py-4 blue-text">Update Password</p>
                <div className="grey-text">
                  <MDBInput
                    label="New password"
                    name="password"
                    icon="user"
                    size="sm"
                    group
                    type="password"
                    onChange={handleChange}
                  />
                  <MDBInput
                    label="Confirm new password"
                    name="password"
                    icon="user"
                    size="sm"
                    group
                    type="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="text-center py-2 mt-3">
                  <MDBBtn gradient="blue" type="submit">
                    <strong>Update Password!</strong>
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBAnimation>
      </MDBCol>
    </MDBContainer>
  );
};

export default UpdatePassword;
