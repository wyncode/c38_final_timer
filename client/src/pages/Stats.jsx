import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchTask } from '../api';

const Stats = ({ data: { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } }) => {
    const [ fetchTask, setFetchTask ] = useState([]);

    useEffect(() => {
      const fetchAPI = async () => {
        setFetchTask( await fetchTask())
      }
      fetchAPI();
    }, [])

    const lineChart = fetchTask.length ? ( 
    <Line
      data={{
        labels: "Your Progress!",
        datasets: [
          {
            data: [ Monday.value, Tuesday.value, Wednesday.value, Thursday.value, Friday.value, Saturday.value, Sunday.value ],
            label: " ",
            borderColor: "#3333ff",
            fill: true,
          }
        ],
      }}
    />
  ) : null;

  return (
    <div style={{ position: 'relative', width: 600, height: 550 }}>
      <h1>You've been productive lately!</h1>
      <h3>Heres your progress!</h3>
      <Line
        options={{
          responsive: true
        }}
        data={{Stats}}
      />
       <div>{lineChart}</div>
    </div>
  );
};


export default Stats;
