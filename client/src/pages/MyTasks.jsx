import React from 'react';
import TaskList from '../components/TaskList';
import PieChart from '../components/PieChart';
import { MDBContainer, MDBView, MDBRow, MDBCol } from 'mdbreact';

const TaskStats = () => {
  return (
    <div>
      <MDBView>
        <MDBContainer className="d-flex justify-content-center align-items-center">
          <MDBCol md="4">
            <MDBRow>
              <p>Your tasks will render here in a grid</p>
            </MDBRow>
          </MDBCol>
          <MDBCol>
            <PieChart />
          </MDBCol>
        </MDBContainer>
      </MDBView>
    </div>
  );
};

export default TaskStats;
