import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const Copyright = () => {
  return (
    <MDBContainer style={{ width: '50%', marginTop: '10%' }}>
      <MDBRow className="py-5">
        <MDBCol md="12" className="white-text text-center">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a href="https://www.Wynit.com"> WynIt.com </a>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Copyright;
