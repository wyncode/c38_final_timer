import React from 'react';
import { MDBContainer, MDBView, MDBRow, MDBCol, MDBTypography } from 'mdbreact';
import TimerClock2 from '../components/TimerClock';
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
        height: '100vh',
        width: '100vw'
      }}
    >
      <MDBView>
        <MDBContainer
          fluid
          className="d-flex justify-content-center align-items-center"
        >
          <MDBRow style={{ marginTop: '8%' }}>
            <MDBCol md="12" style={{ marginLeft: '59%' }}>
              <MDBRow style={{ marginBottom: '-8%' }}>
                <Inspire />
              </MDBRow>
              <TimerClock2 />
            </MDBCol>
            <Copyright />
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
  );
};
export default Home;
