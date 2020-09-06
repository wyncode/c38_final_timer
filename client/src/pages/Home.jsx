import React from 'react';
import { MDBContainer, MDBView, MDBRow, MDBCol, MDBTypography } from 'mdbreact';
import TimerClock from '../components/TimerClock';
import logo from '../Assets/logo.png';
import Wyntank_background from '../Assets/WynBackground.jpg';
import Copyright from '../components/Copyright';
import '../index.css';

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
            <MDBCol style={{ paddingBottom: '20px', paddingTop: '60px' }}>
              {/* <MDBTypography
                className="font-weight-bold mt-sm-5 white-text"
                tag="h3"
                variant="display-3"
              >
                WynIt.
              </MDBTypography> */}
            </MDBCol>
            <MDBRow
              style={{
                paddingBottom: '20px',
                paddingTop: '10px',
                marginTop: '12%'
              }}
            >
              <MDBCol md="7">
                {/* <img src={logo} alt="logo" className="img-fluid" style={{}} /> */}
              </MDBCol>
              <MDBCol md="8" style={{ marginTop: '30%' }}>
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
