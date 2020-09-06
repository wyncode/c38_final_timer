import React, { useState, useContext } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBInput,
  MDBCol,
  MDBRow
} from 'mdbreact';
import axios from 'axios';
import TaskSelector from './TaskSelector';
import { AppContext } from '../context/AppContext';
import { Modal } from 'react-bootstrap';
import { session } from 'passport';

const TimerPostModal = () => {
  const [newSession, setNewSession] = useState(null);
  const [taskId, setTaskId] = useState(null);
  const {
    taskName,
    setTaskName,
    setLoading,
    timeStampEnd,
    timerDuration,
    modal,
    setModal,
    timeStampStart
  } = useContext(AppContext);

  console.log('test', timeStampStart);
  const modalToggle = () => {
    setModal(!modal);
    setTaskName(null);
  };
  const handleChange = (e) => {
    setNewSession({ ...newSession, [e.target.name]: e.target.value });
  };

  let start = timeStampStart && new Date(timeStampStart).toISOString();

  let end = new Date(timeStampEnd).toISOString();

  const handleNewSessionSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        '/api/session',
        {
          ...newSession,
          taskName,
          taskId,
          sessionType: 'spontaneous',
          duration: timerDuration,
          start: start,
          end: end
        },
        { withCredentials: true }
      )
      .then((res) => {
        // console.log(res.data);
        setNewSession(null);
        setModal(!modal);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <MDBContainer>
      <MDBCol>
        <MDBRow className="d-flex justify-content-center"></MDBRow>
      </MDBCol>
      <MDBModal isOpen={modal === true} toggle={modalToggle} centered>
        <MDBModalHeader toggle={modalToggle}>Record Session</MDBModalHeader>
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
            </div>
            <MDBBtn color="blue" type="submit">
              Record
            </MDBBtn>
          </form>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default TimerPostModal;
