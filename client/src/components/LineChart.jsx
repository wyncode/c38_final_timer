import React, { useState, useEffect, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import moment from 'moment';
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBox } from 'mdbreact';
import { AppContext } from '../context/AppContext';

const LineChart = () => {
  const [lineChart, setLineChart] = useState({});
  const [end, setEnd] = useState([]);
  const [duration, setDuration] = useState([]);
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
    console.log(diffHours);
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
          durationTempArray.push(item.durationSpent);
        });
        setEnd(dateTempArray);
        setDuration(durationTempArray);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(dateTempArray);
    setLineChart({
      labels: dateTempArray,
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
          data: durationTempArray
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
