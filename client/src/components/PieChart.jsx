import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import moment from 'moment';
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBox } from 'mdbreact';

const Chart = () => {
  const [pieChart, setPieChart] = useState({});
  const [end, setEnd] = useState([]);
  const [duration, setDuration] = useState(false);

  useEffect(() => {
    let dateTempArray = [];
    let durationTempArray = [];

    axios
      .get('/api/sessions', { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        response.data.forEach((item) => {
          dateTempArray.push(moment(item.end[0]).format('MMM Do YY'));
          durationTempArray.push(item.duration);
        });
        setEnd(dateTempArray);
        setDuration(durationTempArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setPieChart({
      labels: end,
      datasets: [
        {
          data: duration,
          backgroundColor: [
            'red',
            'blue',
            'green',
            'yellow',
            'pink',
            'orange',
            'tan',
            'tomato',
            'teal',
            'lime'
          ]
        }
      ],
      title: {
        display: true,
        text: 'Doughnut Chart'
      },
      animation: {
        animateRotate: true,
        animateScale: true
      }
    });
  }, [duration]);

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
          <Doughnut
            data={pieChart}
            width={100}
            height={50}
            options={{ maintainAspectRatio: true }}
            style={{ border: '1px solid black' }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Chart;