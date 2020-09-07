import React, { useState } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBCol,
  MDBRow
} from 'mdbreact';

const GetStarted = () => {
  const [modal, setModal] = useState(false);

  const modalToggle = () => {
    setModal(!modal);
  };

  return (
    <MDBContainer>
      <MDBCol>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBBtn onClick={modalToggle} size="md" color="info">
            Instructions
          </MDBBtn>
        </MDBRow>
      </MDBCol>
      <MDBModal isOpen={modal === true} toggle={modalToggle} centered>
        <MDBModalHeader className="h3 display-4 blue-text" toggle={modalToggle}>
          Instructions
        </MDBModalHeader>
        <MDBModalBody>
          <p>
            Set your time and get to work! Don't forgot to take a break. The
            WynIt is a big fan of the{' '}
            <a href="https://www.themuse.com/advice/take-it-from-someone-who-hates-productivity-hacksthe-pomodoro-technique-actually-works">
              Pomodoro
            </a>{' '}
            method. When you done log your session by clicking on the ✓ button.
          </p>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default GetStarted;
