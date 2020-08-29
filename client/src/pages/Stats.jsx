import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const Stats = () => {
  const [lineChart, setLineChart] = useState({});

  useEffect(() => {
    const graph = async () => {
      let sessionDate = [];
      let timeSpent = [];
      axios
        .get('/api/tasks', { withCredentials: true })
        .then((response) => console.log(response.data))
        .then((data) => console.log(data))
        .catch((error) => console.log(error.toString()));
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
    <div style={{ position: 'relative', width: 600, height: 550 }}>
      <h1>You've been productive lately!</h1>
      <h3>Heres your progress!</h3>
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
    </div>
  );
};

export default Stats;
