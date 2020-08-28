import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

// import { fetchTask } from '../api';

const Stats = () => {
    const [ lineChart, setLineChart ] = useState({});

   

    useEffect(() => {
      const graph = async () => {
        let sessionDate = [];
        let timeSpent = [];
        // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjQ4NDliNDUzOWYyYmEyMTYxYmYxYTIiLCJuYW1lIjoiQ2FsIiwiaWF0IjoxNTk4NTczMDE3LCJleHAiOjE1OTg2NTk0MTd9.ii3tJq-dLWL6BkuwwOzTYm4Kf05im6HxRej0Xr1LXN4'
        var axios = require('axios');
var data = JSON.stringify({"name":"Cal","email":"calvin.m9233@gmail.com","password":"Carlos15"});

var config = {
  method: 'get',
  url: 'http://localhost:8080/api/tasks',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjQ0MTBjMDZmMWEzODE3Njg1MjJiMmIiLCJuYW1lIjoiSkQyMDIwIiwiaWF0IjoxNTk4Mjk3NzQ3LCJleHAiOjE1OTgzODQxNDd9.wRZ4cu-ONganCdTi7zN9cLQGqVoQxVPM1REia6CPAdg', 
    'Content-Type': 'application/json', 
    // 'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjQ4NDliNDUzOWYyYmEyMTYxYmYxYTIiLCJuYW1lIjoiQ2FsIiwiaWF0IjoxNTk4NTczMDE3LCJleHAiOjE1OTg2NTk0MTd9.ii3tJq-dLWL6BkuwwOzTYm4Kf05im6HxRej0Xr1LXN4'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  console.log({response})
})
.catch(function (error) {
  console.log(error);
});
        // axios
        // .get('/api/tasks', {}, { headers: {Authorization: 'Bearer ' + token } })
        // .then(response => console.log(response.data))
        // .then((data) => console.log(data))
        // .catch((error) => console.log(error.toString()));
        setLineChart({
          labels: sessionDate,
          datasets: [
            {
              label: "Your Progress!",
              data: timeSpent,
              backgroundColor: [
                'rgba( 75, 192, 192, 0.6)'
              ],
              borderWidth: 4
            }
          ]
        })
      }
      graph()
    }, [])

  return (
    <div style={{ position: 'relative', width: 600, height: 550 }}>
      <h1>You've been productive lately!</h1>
      <h3>Heres your progress!</h3>
      <div className='d-flex, justify-content-center, width: 85%'>
      <Line
          data={lineChart} option={{
            responsive: true,
            title: {text: 'Time spent', display: true},
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
    </div>
  );
};


export default Stats;
