import React from 'react';
import {
  MDBContainer,
  MDBView,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBAnimation,
  MDBIcon
} from 'mdbreact';
// import './Home.css';
import { timerClock } from '../components/TimerClock';

const Home = () => {
  return (
    <div>
      <MDBView>
        <MDBContainer
          style={{ height: '100%', width: '100%' }}
          className="d-flex justify-content-center black-text align-items-center"
        >
          <MDBRow style={{ width: '85%' }}>
            <MDBCol
              style={{ paddingBottom: '20px', paddingTop: '40px' }}
              className="text-center text-md-center"
            >
              <MDBTypography
                className="font-weight-bold mt-sm-5 text-center blue-text"
                tag="h3"
                variant="display-3"
              >
                WynIt.
              </MDBTypography>
              <MDBAnimation type="pulse" count={4} duration="300ms">
                <MDBBtn outline color="blue" size="sm">
                  <MDBIcon icon="play" />
                </MDBBtn>

                <MDBBtn outline color="orange" size="sm">
                  <MDBIcon icon="stop" />
                </MDBBtn>
              </MDBAnimation>
            </MDBCol>
            <MDBRow style={{ paddingBottom: '20px', paddingTop: '40px' }}>
              <MDBCol>
                <img
                  src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                  alt=""
                  className="img-fluid"
                />
              </MDBCol>

              <MDBCol>
                <timerClock />
              </MDBCol>

              <MDBCol>
                <img
                  src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                  alt=""
                  className="img-fluid"
                />
              </MDBCol>
            </MDBRow>
          </MDBRow>
        </MDBContainer>
      </MDBView>

      <MDBContainer style={{ width: '50%' }}>
        <MDBRow className="py-5">
          <MDBCol md="12" className="text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Home;
