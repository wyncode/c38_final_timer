import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

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
        alert('Password successfully changed!');
        history.push('/login');
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <h1>Update Password</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit">Update Password</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default UpdatePassword;
