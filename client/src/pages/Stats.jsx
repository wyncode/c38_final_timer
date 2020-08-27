import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

// import { fetchTask } from '../api';

const Stats = () => {
    const [ lineChart, setLineChart ] = useState({});

    const graph = () => {
      setLineChart({
        labels: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ],
        datasets: [
          {
            label: "Your Progress!",
            data: 'insert session hours',
            backgroundColor: [
              'rgba( 75, 192, 192, 0.6'
            ],
            borderWidth: 4
          }
        ]
      })
    }

    useEffect(() => {
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
