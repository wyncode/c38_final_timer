import React from 'react';
import { MDBContainer, MDBView, MDBRow, MDBCol } from 'mdbreact';
import TimerClock from '../components/TimerClock';
import Wyntank_background from '../Assets/WynBackground.jpg';
import Copyright from '../components/Copyright';
import '../index.css';
import Inspire from '../components/Inspire';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Wyntank_background})`,
        backgroundSize: 'cover',
        height: '100vh'
      }}
    >
      <MDBView>
        <MDBContainer
          fluid
          className="d-flex justify-content-center align-items-center"
        >
          <MDBRow style={{ width: '80%' }}>
            <MDBCol
              style={{ paddingBottom: '20px', paddingTop: '60px' }}
            ></MDBCol>
            <MDBRow
              style={{
                paddingBottom: '20px',
                paddingTop: '10px',
                marginTop: '12%'
              }}
            >
              <MDBCol md="7"></MDBCol>
              <MDBCol md="8" style={{ marginTop: '30%' }}>
                <Inspire />
                <TimerClock />
              </MDBCol>
            </MDBRow>
          </MDBRow>
        </MDBContainer>
        <Copyright />
      </MDBView>
    </div>
  );
};
export default Home;
