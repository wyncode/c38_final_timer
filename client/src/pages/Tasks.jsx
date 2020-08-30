import React from 'react';
import { MDBContainer, MDBView, MDBRow, MDBCol, MDBTypography } from 'mdbreact';
import UsersNav from '../components/UsersNav';
import TaskForm from '../components/TaskForm';

const Tasks = () => {
  return (
    <div>
      <MDBView>
        <UsersNav />
        <MDBContainer
          style={{ height: '100%', width: '85%' }}
          className="d-flex justify-content-center black-text align-items-center"
        >
          <MDBRow style={{ width: '85%' }}>
            <MDBCol>
              <h1>Tasks go here in list</h1>
            </MDBCol>
            <MDBRow></MDBRow>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
  );
};

export default Tasks;
