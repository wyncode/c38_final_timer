import React from 'react';
import { MDBContainer } from 'mdbreact';

const Copyright = () => {
  return (
    <MDBContainer
      className="white-text"
      style={{ width: '50%', marginTop: '5%', marginBottom: '10%' }}
      fluid
    >
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a href="https://www.Wynit.com"> WynIt.com </a>
    </MDBContainer>
  );
};

export default Copyright;
