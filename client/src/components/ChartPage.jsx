import React from 'react';
import { Line } from 'react-chartjs-2';
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBox } from 'mdbreact';

class ChartsPage extends React.Component {
  state = {
    dataLine: {
      labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      datasets: [
        {
          label: 'Task1 Name',
          fill: false,
          lineTension: 0.4,
          borderColor: '#0A1045',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#CC5803',
          pointBackgroundColor: '#CC5803',
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgb(0, 0, 0)',
          pointHoverBorderColor: 'rgba(220, 220, 220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Task2 Name',
          fill: false,
          lineTension: 0.4,
          borderColor: '#228CDB',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#CC5803',
          pointBackgroundColor: '#228CDB',
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgb(0, 0, 0)',
          pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  };

  render() {
    return (
      <MDBContainer
        className=" mt-5 d-flex justify-content-center black-text align-items-center
      "
      >
        <MDBRow
          className="text-center text-md-center"
          style={{ height: '100%', width: '100%' }}
        >
          <MDBCol
            className="text-center text-md-center"
            style={{ paddingBottom: '20px', paddingTop: '40px' }}
          >
            <MDBTypography blockquote bqColor="primary">
              <MDBBox size="sm" tag="p" mb={0} className="bq-title">
                You've been Productive lately!
              </MDBBox>
              <p>
                {' '}
                Play around with your preferences, explore your different tasks
                and map your progress!
              </p>
            </MDBTypography>
            <Line data={this.state.dataLine} options={{ responsive: true }} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ChartsPage;
