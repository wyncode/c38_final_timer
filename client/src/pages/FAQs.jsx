import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';
import Navigation from '../components/Navigation';

const FAQs = () => {
  return (
    <MDBContainer fluid>
      <Navigation />
      <section className="my-5">
        <h2
          className="h1-responsive font-weight-bold text-center my-4 blue-text"
          style={{ paddingTop: '40px' }}
        >
          Ready to Wyn it?
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          Our super streamlined interface, coupled with easy-to-use
          functionality makes it the most effective productivity timer out
          there. Don't waste time trying to figure it out, <br></br> just press{' '}
          <strong>start</strong>.
        </p>

        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
              alt=""
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="clock" size="lg" className="blue-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">The Timer</h5>
                <p className="grey-text">
                  Whether you need a Default, the much raved about Pomodoro, or
                  your own Custom timer, we've got you covered.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="code" size="lg" className="blue-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">The Tech</h5>
                <p className="grey-text">
                  We made this web app because because we know you've got better
                  stuff to do. Nothing fancy, just you, this timer and your
                  task.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="blue-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">The Team</h5>
                <p className="grey-text">
                  The WynIt team does just that. Each member brings a unique set
                  of skills, the combination of which gave you this app!
                </p>
                <MDBBtn color="light-blue" size="sm">
                  Learn More
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
};

export default FAQs;
