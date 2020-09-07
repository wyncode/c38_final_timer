import React from 'react';
import TaskList from '../components/TaskList';
import PieChart from '../components/PieChart';
import { MDBContainer, MDBView, MDBRow, MDBCol } from 'mdbreact';

const TaskStats = () => {
  return (
    <div>
      <MDBView>
        <MDBContainer
          fluid
          className="d-flex justify-content-center align-items-center"
        >
          <MDBCol md="4" style={{ marginRight: '6%' }}>
            <MDBRow style={{ marginTop: '25%' }}>
              <TaskList />
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
