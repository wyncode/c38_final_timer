import React from 'react';
import ChartPage from '../components/ChartPage';
import TaskList from '../components/TaskList';

import UsersNav from '../components/UsersNav';
import { MDBContainer, MDBView, MDBRow, MDBCol } from 'mdbreact';
// import { fetchTask } from '../api';

const Stats = () => {
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
            <MDBCol style={{ marginRight: '-300px' }}>
              <ChartPage />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
  );
};

export default Stats;
