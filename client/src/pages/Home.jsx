import React from 'react';
import { MDBContainer, MDBView, MDBRow, MDBCol } from 'mdbreact';
import TimerClock2 from '../components/TimerClock';
import Copyright from '../components/Copyright';
import './home.css';
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
          <MDBCol md="12" style={{ marginLeft: '40%' }}>
            {/* <MDBRow style={{ marginBottom: '-8%' }}> */}
            <Inspire />
            {/* </MDBRow> */}
            <TimerClock2 />
          </MDBCol>
          <Copyright />
        </MDBRow>
      </MDBContainer>
    </MDBView>
  );
};
export default Home;
