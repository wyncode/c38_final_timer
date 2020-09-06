import React, { useEffect, useState, useContext } from 'react';
import './timer.css';
import {
  MDBInput,
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBAnimation
} from 'mdbreact';
import { AppContext } from '../context/AppContext';
import TimerPostModal from './TimerPostModal';
import { motion } from 'framer-motion';

const TimerClock2 = () => {
  const {
    currentUser,
    adder,
    setAdder,
    setTimeStampEnd,
    setTimerDuration,
    modal,
    setModal,
    setTimeStampStart
  } = useContext(AppContext);
  const [counter, setCounter] = useState(25 * 60); // timmer
  const [isActive, setIsActive] = useState(false); // is the timer running?
  const [timestamp, setTimestamp] = useState(false); // has a timestamp been recorded?
  const [breakTime, setBreakTime] = useState(false); // is it break time?
  const [animationState, setAnimationState] = useState('paused'); // sets the animation state 'paused' | 'active'
  const [timeDuration, setTimeDuration] = useState(''); //sets the time duration of the animation
  const [key, setKey] = useState(''); //passed as a prop to reset the svg animation

  const timeInMinutes = Math.floor(counter / 60);
  const timeInSeconds = Math.floor(counter % 60);

  //rotate timer on load
  const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { duration: 1 }
    }
  };

  //sets the session to active
  const toggle = () => {
    if (timestamp === false) {
      setTimestamp(true);
      let time = new Date().getTime();

      console.log(timeDuration);
      setTimeStampStart(time);
      setAdder(time);
    }
    setIsActive(!isActive);
    setTimeDuration(counter * 1.799);
    animation();
  };

  const animation = () => {
    if (isActive === false) {
      setAnimationState('running');
      console.log('animation is running');
    } else {
      setAnimationState('paused');
      console.log('animation has been paused');
    }
  };

  //resets count to 25 minutes, triggers modal to record session, calculate timestamps
  const reset = () => {
    setCounter(25 * 60);
    setIsActive(false);
    let time2 = Date.now();
    setTimeStampEnd(time2);
    let durationInMins = Math.abs(time2 - adder) / 60000;
    setTimerDuration(durationInMins);
    setTimestamp(false);
    setAnimationState('paused');
    setKey((preKey) => preKey + 1);
    if (currentUser && breakTime === false) {
      setModal(!modal);
    }
  };

  //sets break time values
  const handleBreakTime = (event) => {
    event.preventDefault();
    setCounter(event.target.break.value * 60);
    setBreakTime(true);
    setTimerValues();
  };

  //sets work time values
  const handleWorkTime = (event) => {
    event.preventDefault();
    setCounter(event.target.work.value * 60);
    setBreakTime(false);
    setTimerValues();
  };

  const setTimerValues = () => {
    console.log("it's break time!");
    setTimeDuration(counter * 1.799);
    console.log('timer duration:' + timeDuration);
    setIsActive(false);
    setAnimationState('paused');
    setKey((preKey) => preKey + 1);
  };

  //adding extra 0's
  const makeMeTwoDigits = (n) => {
    return (n < 10 ? '0' : '') + n;
  };

  useEffect(() => {
    if (isActive) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    } else if (!isActive && counter !== 0) {
      clearInterval(counter);
    }
  }, [counter, isActive]);

  return (
    <div className="App">
      <div id="pomodoro-timer" style={{ marginBottom: '20px' }}>
        <div>
          <motion.svg
            width="400"
            height="400"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          >
            <path
              style={{
                animationName: 'dash',
                animationDirection: 'normal',
                animationTimingFunction: 'linear',
                animationDuration: `${timeDuration}s`,
                WebkitAnimationPlayState: `${animationState}`
              }}
              key={key}
              transform="rotate(90 200 200)"
              fill="none"
              d="
        M 200, 200
        m -90, 0
        a 90,90 0 1,0 180,0
        a 90,90 0 1,0 -180,0
        "
            />
            <path
              className={counter > 0 ? 'circle2' : 'timeup'}
              d="
        M 200, 200
        m -90, 0
        a 90,90 0 1,0 180,0
        a 90,90 0 1,0 -180,0
        "
            />
            <text x="135" y="220" fill="white" fontSize="50px">
              {' '}
              {makeMeTwoDigits(timeInMinutes)}:{makeMeTwoDigits(timeInSeconds)}
            </text>
          </motion.svg>
        </div>
      </div>
      <MDBAnimation
        // style={{ marginTop: '-10px' }}
        type="pulse"
        count={7}
        duration="300ms"
      >
        <MDBBtn outline color="blue" size="md" onClick={toggle}>
          <MDBIcon icon="play" />
          <span>{'  '}</span>
          <MDBIcon icon="pause" />
        </MDBBtn>
        <MDBBtn outline color="orange" size="md" onClick={reset}>
          <MDBIcon icon="stop" />
        </MDBBtn>
      </MDBAnimation>

      <MDBContainer style={{ marginTop: '-10px' }}>
        <form onSubmit={handleBreakTime}>
          <MDBInput
            label="Break Time"
            type="text"
            name="break"
            outline
          ></MDBInput>
          <MDBBtn
            className="rounded btn-btn-primary waves-effect"
            type="submit"
            gradient="blue"
            size="md"
            style={{ marginTop: '-5%' }}
          >
            SET BREAK
          </MDBBtn>
        </form>
      </MDBContainer>
      <MDBContainer style={{ marginTop: '-10px' }}>
        <form onSubmit={handleWorkTime}>
          <MDBInput
            label="Work Time"
            type="text"
            name="work"
            outline
          ></MDBInput>
          <MDBBtn
            className="rounded btn-btn-primary waves-effect"
            type="submit"
            gradient="peach"
            size="md"
            style={{ marginTop: '-5%' }}
          >
            SET WORK
          </MDBBtn>
        </form>
      </MDBContainer>

      <div>
        <TimerPostModal />
      </div>
    </div>
  );
};

export default TimerClock2;
