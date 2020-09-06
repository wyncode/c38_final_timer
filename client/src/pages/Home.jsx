import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { MDBContainer, MDBView, MDBRow, MDBCol, MDBTypography } from 'mdbreact';
import UsersNav from '../components/UsersNav';
import Nav from '../components/Nav';
import TimerClock from '../components/TimerClock';

const Home = () => {
  const currentUser = useContext(AppContext);
  return (
    <div style={{ background: '#0A1045' }}>
      <MDBView>
        <MDBContainer
          fluid
          style={{ background: '#0A1045', height: '100%', width: '100%' }}
          className="d-flex justify-content-center align-items-center"
        >
          <MDBRow style={{ width: '100%' }}>
            <MDBCol
              style={{ paddingBottom: '20px', paddingTop: '60px' }}
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
            <MDBContainer style={{ width: '50%' }}>
              <MDBRow className="py-5">
                <MDBCol md="12" className="white-text text-center">
                  <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a href="https://www.Wynit.com"> WynIt.com </a>
                  </MDBContainer>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
  );
};
export default Home;
