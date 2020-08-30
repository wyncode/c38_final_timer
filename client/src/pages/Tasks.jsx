import React from 'react';
import { MDBContainer, MDBView, MDBRow, MDBCol, MDBTypography } from 'mdbreact';
import UsersNav from '../components/UsersNav';
import TaskForm from '../components/TaskForm';

const Tasks = () => {
  return (
    <div>
      <MDBView>
        <UsersNav />
        <MDBContainer style={{ marginTop: '100px' }} fluid>
          <MDBRow>
            <MDBCol>This will be where the task list renders</MDBCol>
            <MDBCol>
              <TaskForm />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
  );
};

export default Tasks;
