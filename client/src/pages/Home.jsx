import React from 'react';
import Navigation from '../components/Navigation';
import {MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const Home = () => {
  return (
    <MDBContainer fluid>
        <Navigation />
        <MDBRow>
    <MDBCol md="3">HOME</MDBCol>
    <MDBCol md="6">HOME</MDBCol>
    <MDBCol md="3">HOME</MDBCol>
  </MDBRow>
    </MDBContainer>
  );
};

export default Home;
