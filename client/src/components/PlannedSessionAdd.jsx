import React, { useState, useContext } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput
} from 'mdbreact';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import TaskSelector from './TaskSelector';
import { AppContext } from '../context/AppContext';

const PlannedSessionAdder = () => {
  const [modal, setModal] = useState(false);
  const [newSession, setNewSession] = useState(null);
  const { taskName } = useContext(AppContext);

  const modalToggle = () => {
    setModal(!modal);
  };
  const handleChange = (e) => {
    setNewSession({ ...newSession, [e.target.name]: e.target.value });
  };

  const handleNewSessionSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('/api/plannedSession', newSession, { withCredentials: true })
      .then((res) => {
        console.log(res);
        setNewSession(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <MDBContainer className="container d-flex flex-column align-items-center justify-content-center">
      <MDBBtn onClick={modalToggle}>Add Productivity Session</MDBBtn>
      <MDBModal isOpen={modal === true} toggle={modalToggle} centered>
        <MDBModalHeader toggle={modalToggle}>
          Add a Productivity Session
        </MDBModalHeader>
        <MDBModalBody>
          <form onSubmit={handleNewSessionSubmit}>
            <div className="grey-text">
              <MDBInput
                label="Session Title"
                name="description"
                type="text"
                validate
                error="wrong"
                success="right"
                onChange={handleChange}
              />
              <TaskSelector />
              <label>Start Date</label>
              <MDBInput
                name="start"
                type="datetime-local"
                onChange={handleChange}
              />
              <label>End Date</label>
              <MDBInput
                name="end"
                type="datetime-local"
                onChange={handleChange}
              />
            </div>
            <MDBBtn color="primary" type="submit">
              Create
            </MDBBtn>
          </form>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default PlannedSessionAdder;
