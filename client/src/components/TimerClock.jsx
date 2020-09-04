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
  const [counter, setCounter] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [timestamp, setTimestamp] = useState(false);

  const timeInMinutes = Math.floor(counter / 60);
  const timeInSeconds = Math.floor(counter % 60);
  //adding that 0 on for the seconds
  const makeMeTwoDigits = (n) => {
    return (n < 10 ? '0' : '') + n;
  };

  //sets the session to active
  const toggle = () => {
    if (timestamp === false) {
      setTimestamp(true);
      let time = new Date().getTime();
      setTimeStampStart(time);
      setAdder(time);
    }
    setIsActive(!isActive);
  };

  //resets count to 25
  const reset = () => {
    setCounter(25 * 60);
    setIsActive(false);
    let time2 = Date.now();
    setTimeStampEnd(time2);
    let durationInMins = Math.abs(time2 - adder) / 60000;
    setTimerDuration(durationInMins);
    setTimestamp(false);
    if (currentUser) {
      setModal(!modal);
    }
  };

  // useEffect(() => {
  //   console.log(startTimestamp);
  //   console.log(timeStampEnd);
  //   console.log(timerDuration);
  // }, [startTimestamp, timeStampEnd, timerDuration]);

  //sets breaktime
  const handleBreakTime = (event) => {
    event.preventDefault();
    setCounter(event.target.break.value * 60);
    setIsActive(false);
  };

  //sets worktime
  const handleWorkTime = (event) => {
    event.preventDefault();
    setCounter(event.target.work.value * 60);
    setIsActive(false);
  };

  useEffect(() => {
    // console.log(counter, isActive);
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
        <div className="timer-div">
          {' '}
          <h1 className="timer">
            {timeInMinutes}:{makeMeTwoDigits(timeInSeconds)}
          </h1>
        </div>
      </div>
      <MDBAnimation type="pulse" count={7} duration="300ms">
        <MDBBtn outline color="blue" size="md" onClick={toggle}>
          <MDBIcon icon="play" />
          <span>{'  '}</span>
          <MDBIcon icon="pause" />
        </MDBBtn>
        <MDBBtn outline color="orange" size="md" onClick={reset}>
          <MDBIcon icon="stop" />
        </MDBBtn>
      </MDBAnimation>

      <MDBContainer style={{ width: '40%' }}>
        <form onSubmit={handleBreakTime}>
          <MDBInput
            label="Break Time"
            type="text"
            name="break"
            outline
          ></MDBInput>
          <MDBBtn
            className="btn-btn-primary"
            type="submit"
            gradient="blue"
            size="sm"
            waves-effect
          >
            Break
          </MDBBtn>
        </form>
      </MDBContainer>
      <MDBContainer style={{ width: '40%' }}>
        <form onSubmit={handleWorkTime}>
          <MDBInput
            label="Work Time"
            type="text"
            name="work"
            outline
          ></MDBInput>
          <MDBBtn
            className="btn-btn-primary"
            type="submit"
            gradient="blue"
            size="sm"
            waves-effect
          >
            POMODORO
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
