import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
// import axios from 'axios';
// import { AppContext } from '../context/AppContext';

const timerClock = () => (
  <CountdownCircleTimer
    isPlaying
    duration={60}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33]
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);

export default timerClock;
