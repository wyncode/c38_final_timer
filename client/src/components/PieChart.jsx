import React, { useState, useEffect, useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import moment from 'moment';
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBox } from 'mdbreact';
import { AppContext } from '../context/AppContext';

const LineChart = () => {
  const [lineChart, setLineChart] = useState({});
  const [end, setEnd] = useState([]);
  const [duration, setDuration] = useState(false);
  const { sessions, setSessions } = useContext(AppContext);

  const processSessions = (sessions) => {
    let filteredSessions = sessions.filter(
      (session) => session.end.length !== 0
    );
    let diffHours = filteredSessions.map((session) => {
      let end = moment(session.end[0]),
        start = moment(session.start[0]);
      return end.diff(start, 'h');
    });
    setSessions(diffHours);
  };

  useEffect(() => {
    let dateTempArray = [];
    let durationTempArray = [];

    axios
      .get('/api/sessions', { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        processSessions(response.data);
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
    setLineChart({
      labels: end,
      datasets: [
        {
          label: 'Task',
          data: duration,
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(135, 102, 255, 1)'
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
            data={lineChart}
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

export default LineChart;
