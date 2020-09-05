import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { MDBContainer, MDBView, MDBRow, MDBCol, MDBTypography } from 'mdbreact';
import TimerClock from '../components/TimerClock';
import logo from '../Assets/logo.png';
import Copyright from '../components/Copyright';
import '../index.css';

const Home = () => {
  const currentUser = useContext(AppContext);
  return (
    <div style={{ background: '#0A1045' }}>
      <MDBView>
        <MDBContainer
          fluid
          className="d-flex justify-content-center align-items-center"
        >
          <MDBRow style={{ width: '80%' }}>
            <MDBCol style={{ paddingBottom: '20px', paddingTop: '60px' }}>
              <MDBTypography
                className="font-weight-bold mt-sm-5 blue-text"
                tag="h3"
                variant="display-3"
              >
                WynIt.
              </MDBTypography>
            </MDBCol>
            <MDBRow style={{ paddingBottom: '20px', paddingTop: '10px' }}>
              <MDBCol md="7">
                <img src={logo} alt="logo" className="img-fluid" style={{}} />
              </MDBCol>
              <MDBCol>
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
