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
import { timerClock } from '../components/TimerClock';
import Nav from '../components/Nav';


const Home = () => {
  return (
    <div>
      <MDBView>
        <MDBContainer
          fluid
          style={{ background: '#0A1045' }}
          className="d-flex justify-content-center fixed-bottom align-items-center"
        >
          <Nav />
          <MDBRow style={{ width: '85%' }}>
            <MDBCol className="text-center text-md-center">
              <MDBTypography
                className="font-weight-bold mt-sm-5 text-center blue-text"
                tag="h3"
                variant="display-3"
              >
                WynIt.
              </MDBTypography>
              <MDBAnimation type="pulse" count={4} duration="400ms">
                <MDBBtn
                  className="rounded-circle"
                  style={{ height: '40px' }}
                  outline
                  color="blue"
                  size="sm"
                >
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
                <TimerClock />
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
      <MDBContainer className="fixed-bottom" style={{ width: '50%' }}>
        <MDBRow className="py-1">
          <MDBCol className="text-center white-text">
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