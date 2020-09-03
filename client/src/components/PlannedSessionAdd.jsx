import React, { useState, useContext } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBCol,
  MDBRow
} from 'mdbreact';
import axios from 'axios';
import TaskSelector from './TaskSelector';
import { AppContext } from '../context/AppContext';
import { Modal } from 'react-bootstrap';
import { session } from 'passport';

const PlannedSessionAdder = () => {
  const [modal, setModal] = useState(false);
  const [newSession, setNewSession] = useState(null);
  const [taskId, setTaskId] = useState(null);
  const { taskName, setTaskName, setLoading } = useContext(AppContext);

  const modalToggle = () => {
    setModal(!modal);
    setTaskName(null);
  };
  const handleChange = (e) => {
    setNewSession({ ...newSession, [e.target.name]: e.target.value });
  };
  const handleNewSessionSubmit = async (e) => {
    e.preventDefault();
    let sessionStart = Date.parse(newSession.start);
    let sessionEnd = Date.parse(newSession.end);
    let durationInMilliseconds = Math.abs(sessionStart - sessionEnd);
    let durationInMins = durationInMilliseconds / 60000;
    console.log(durationInMins);
    setLoading(true);
    axios
      .post(
        '/api/session',
        {
          ...newSession,
          taskName,
          taskId,
          sessionType: 'planned',
          duration: durationInMins
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        setNewSession(null);
        setModal(!modal);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <MDBContainer>
      <MDBCol>
        <MDBRow className="d-flex justify-content-center">
          <p className="h4 ">2. Schedule a Work Session</p>
          <MDBBtn onClick={modalToggle} size="md" color="info">
            Add Work Session
          </MDBBtn>
        </MDBRow>
      </MDBCol>
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
              <TaskSelector setTaskId={setTaskId} />
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
            <MDBBtn color="blue" type="submit">
              Create
            </MDBBtn>
          </form>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default PlannedSessionAdder;
