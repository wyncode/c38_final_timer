import React from 'react';
import { MDBContainer, MDBView, MDBRow, MDBCol } from 'mdbreact';
import UsersNav from '../components/UsersNav';
import TaskForm from '../components/TaskForm';
import Calendar from '../components/Calendar';
import PlannedSessionAdder from '../components/PlannedSessionAdd';

const Tasks = () => {
  return (
    <div>
      <MDBView>
        <UsersNav />
        <MDBContainer style={{ marginTop: '80px' }} fluid>
          <MDBRow classname="no-gutters">
            <MDBCol md="3" style={{ marginLeft: '100px', marginTop: '110px' }}>
              <MDBRow>
                <TaskForm />
              </MDBRow>
              <MDBRow
                classname="justify-items-center"
                style={{ marginTop: '30px' }}
              >
                <p className="h4 text-center mb-4">
                  2. Schedule a Work Session
                </p>
                <MDBRow style={{ marginTop: '-20px', marginLeft: '55px' }}>
                  <PlannedSessionAdder />
                </MDBRow>
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

export default Tasks;
