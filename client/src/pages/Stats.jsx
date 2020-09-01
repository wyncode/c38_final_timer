import React, { useState, useEffect } from 'react';
// import ChartPage from '../components/ChartPage';
import axios from 'axios';
import LineChart from '../components/LineChart';
import UsersNav from '../components/UsersNav';
import { MDBContainer, MDBView, MDBRow, MDBCol, MDBTypography } from 'mdbreact';
// import { fetchTask } from '../api';

const Stats = () => {
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
              <LineChart />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
  );
};

export default Stats;
