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
            '#FF5400',
            '#228CDB',
            '#5BC0EB',
            '#FFC914',
            '#FF4A1C',
            '#0A1045',
            '#390099',
            '#00916E'
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
  }, [end, duration]);

  return (
    <MDBContainer
      className=" mt-5 d-flex justify-content-center black-text align-items-center
      "
    >
      <MDBRow
        className="text-center text-md-center"
        style={{ marginTop: '10%' }}
      >
        <MDBCol
          className="text-center text-md-center"
          style={{ paddingBottom: '20px', paddingTop: '40px' }}
        >
          <MDBRow className="justify-content-center align-items-center">
            <MDBTypography blockquote bqColor="primary" className="text-center">
              <MDBBox size="sm" tag="span" className="bq-title ">
                <strong>You've been productive lately!</strong>
              </MDBBox>
              <p className="grey-text">
                Play around with your preferences, explore your different tasks
                and map your progress!
              </p>
              <Doughnut
                data={pieChart}
                width={200}
                height={100}
                options={{ maintainAspectRatio: true }}
                style={{ border: '1px solid black' }}
              />
            </MDBTypography>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Chart;
