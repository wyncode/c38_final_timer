import React from 'react';
import { MDBContainer, MDBView, MDBRow, MDBCol } from 'mdbreact';
import TaskForm from '../components/TaskForm';
import Calendar from '../components/Calendar';
import PlannedSessionAdder from '../components/PlannedSessionAdd';
import './scheduler.css';

const Scheduler = () => {
  return (
    <div id="tasks">
      <MDBView>
        <MDBContainer style={{ marginTop: '5%' }} fluid>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="3" style={{ marginTop: '10%' }}>
              <MDBRow>
                <TaskForm />
              </MDBRow>
              <MDBRow>
                <PlannedSessionAdder />
              </MDBRow>
            </MDBCol>
            <MDBCol
              md="6"
              style={{ marginBottom: '100px', marginRight: '100px' }}
            >
              <Calendar />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
  );
};

export default Scheduler;
