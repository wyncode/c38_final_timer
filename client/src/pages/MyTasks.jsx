import React from 'react';
import TaskList from '../components/TaskList';
import PieChart from '../components/PieChart';
import UsersNav from '../components/UsersNav';
import { MDBContainer, MDBView, MDBRow, MDBCol } from 'mdbreact';

const TaskStats = () => {
  return (
    <div>
      <MDBView>
        <UsersNav />
        <MDBContainer className="d-flex justify-content-center align-items-center">
          <MDBRow style={{ marginTop: '100px' }}>
            <MDBCol md="5">
              <MDBRow>
                <p>Your tasks will render here in a grid</p>
              </MDBRow>
            </MDBCol>
            <MDBCol>
              <PieChart />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
  );
};

export default TaskStats;
