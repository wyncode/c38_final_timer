import React, { useState } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';
import { Form } from 'react-bootstrap';
import axios from 'axios';

const PlannedSessionAdder = () => {
  const [modal, setModal] = useState(false);
  const [newSession, setNewSession] = useState(null);

  const modalToggle = () => {
    setModal(!modal);
  };
  // const handleChange = (e) => {
  //   setNewSession({ ...newSession, [e.target.name]: e.target.value });
  // };

  // const handleNewSessionSubmit = async (e) => {
  //   e.preventDefault();
  //   axios
  //     .post('/api/plannedSession', newSession, { withCredentials: true })
  //     .then((res) => {
  //       console.log(res);
  //       setNewSession(null);
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <MDBContainer className="container d-flex flex-column align-items-center justify-content-center">
      <MDBBtn onClick={modalToggle}>Add Productivity Session</MDBBtn>
      <MDBModal isOpen={modal === true} toggle={modalToggle} centered>
        <MDBModalHeader toggle={modalToggle}>
          Add a Productivity Session
        </MDBModalHeader>
        <MDBModalBody>
          <form>
            <div className="grey-text">
              <MDBInput
                label="Session Title"
                name="Session Title"
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBDropdown dropright className="mb-5">
                <MDBDropdownToggle caret color="primary">
                  Associated Task
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>Studying</MDBDropdownItem>
                  <MDBDropdownItem>Exercise</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <label>Start Date</label>
              <MDBInput name="StartDate" type="datetime-local" />
              <label>End Date</label>
              <MDBInput name="EndDate" type="datetime-local" />
            </div>
          </form>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={modalToggle}>
            Close
          </MDBBtn>
          <MDBBtn color="primary" type="submit">
            Create
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default PlannedSessionAdder;
