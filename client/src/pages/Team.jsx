import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTypography
} from 'mdbreact';
import ana from '../Assets/ana.JPG';
import sara from '../Assets/sara.JPG';
import rod from '../Assets/rod.jpg';
import cal from '../Assets/cal.png';

const Team = () => {
  return (
    <MDBContainer
      fluid
      className="d-flex justify-content-center align-items-center"
    >
      <MDBCard
        style={{ marginTop: '7%', marginBottom: '5%', width: '85%' }}
        className="text-center"
      >
        <MDBCardBody>
          <MDBTypography
            className="font-weight-bold mt-sm-5 blue-text"
            tag="h4"
            variant="display-4"
          >
            The Team.
          </MDBTypography>
          <p
            style={{ width: '50%' }}
            className="grey-text w-responsive mx-auto mb-5"
          >
            This team of four Wyncoders went from having no coding experience to
            building a full-stack web application. WynIt is the result of their
            love for productivity, functionality and simplicity.
          </p>
          <MDBRow>
            <MDBCol>
              <img
                tag="img"
                src={cal}
                className="rounded z-depth-3 img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                Calvin Malagon
              </h4>
              <h6 className="text-uppercase grey-text mb-3">Statistician</h6>
            </MDBCol>
            <MDBCol>
              <img
                tag="img"
                src={rod}
                className="rounded z-depth-3 img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                Rodrigo Poma
              </h4>
              <h6 className="text-uppercase grey-text mb-3">
                Web-pack connoisseur
              </h6>
            </MDBCol>
            <MDBCol>
              <img
                tag="img"
                src={sara}
                className="rounded z-depth-3 img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                Sara Salazar
              </h4>
              <h6 className="text-uppercase grey-text mb-3">Dr. Who</h6>
            </MDBCol>
            <MDBCol>
              <img
                tag="img"
                src={ana}
                className="rounded z-depth-3 img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                Ana Souza
              </h4>
              <h6 className="text-uppercase grey-text mb-3">Grid Lord</h6>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Team;
