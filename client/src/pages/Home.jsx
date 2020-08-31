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
import Nav from '../components/Nav';
import TimerClock from '../components/TimerClock';
const Home = () => {
  return (
    <div>
      <MDBView>
        <Nav />
        <MDBContainer
          fluid
          style={{ background: '#0A1045', height: '100%', width: '100%' }}
          className="d-flex justify-content-center no-gutters align-items-center"
        >
          <MDBRow style={{ width: '100%' }}>
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
            </MDBCol>
            <MDBRow style={{ paddingBottom: '20px', paddingTop: '10px' }}>
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
