import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import moment from 'moment';
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBox } from 'mdbreact';

const LineChart = () => {
  const [lineChart, setLineChart] = useState({});
  const [sessionDates, setSessionDates] = useState([]);
  const [timeSpent, setTimeSpent] = useState([]);

  useEffect(() => {
    let sessionTempArray = [];
    let timeSpentTempArray = [];

    axios
      .get('/linechart/5f4d3b936ebd6258a651bff5')
      .then((response) => {
        console.log(response.data);
        response.data.forEach((item) => {
          sessionTempArray.push(
            moment(item.sessionDates[0]).format('MMM Do YY')
          );
          timeSpentTempArray.push(item.timeSpent);
        });
        setSessionDates(sessionTempArray);
        setTimeSpent(timeSpentTempArray);
      })
      .catch(function (error) {
        console.log(error);
      });

    setLineChart({
      labels: sessionTempArray,
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
          data: timeSpentTempArray
        }
      ]
    });
  }, []);

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
              Play around with your preferences, explore your different tasks
              and map your progress!
            </p>
          </MDBTypography>
          <Line
            data={lineChart}
            option={{
              responsive: true
            }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LineChart;
