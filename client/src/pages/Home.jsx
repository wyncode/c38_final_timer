import React from 'react';
import { MDBContainer, MDBView, MDBRow, MDBCol } from 'mdbreact';
import './home.css';
import TimerClock from '../components/TimerClock';
import Copyright from '../components/Copyright';
import Inspire from '../components/Inspire';

const Home = () => {
  return (
    <MDBView>
      <MDBContainer
        fluid
        className="d-flex justify-content-center align-items-center"
        id="background"
      >
        <MDBRow style={{ marginTop: '8%' }}>
          <MDBCol md="12" style={{ marginLeft: '40%', marginBottom: '10%' }}>
            <Inspire />
            <TimerClock />
          </MDBCol>
          <Copyright />
        </MDBRow>
      </MDBContainer>
    </MDBView>
  );
};
export default Home;
