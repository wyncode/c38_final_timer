import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const [lineChart, setLineChart] = useState({});

useEffect(() => {
  const graph = async () => {
    let sessionDate = [];
    let timeSpent = [];

    var axios = require('axios');
    var data = JSON.stringify({
      name: 'Cal',
      email: 'calvin.m9233@gmail.com',
      password: 'Carlos15'
    });

    var config = {
      method: 'get',
      url: '/api/tasks',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjQ0MTBjMDZmMWEzODE3Njg1MjJiMmIiLCJuYW1lIjoiSkQyMDIwIiwiaWF0IjoxNTk4Mjk3NzQ3LCJleHAiOjE1OTgzODQxNDd9.wRZ4cu-ONganCdTi7zN9cLQGqVoQxVPM1REia6CPAdg',
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log({ response });
      })
      .catch(function (error) {
        console.log(error);
      });

    setLineChart({
      labels: sessionDate,
      datasets: [
        {
          label: 'Your Progress!',
          data: timeSpent,
          backgroundColor: ['rgba( 75, 192, 192, 0.6 )'],
          borderWidth: 4
        }
      ]
    });
  };
  graph();
}, []);

return (
  <div className="d-flex, justify-content-center, width: 85%">
    <Line
      data={lineChart}
      option={{
        responsive: true,
        title: { text: 'Time spent', display: true },
        scales: {
          yAxes: [
            {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10,
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        }
      }}
    />
  </div>
);
