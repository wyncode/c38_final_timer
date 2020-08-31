import React from 'react';
import './timer.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {
  MDBInput,
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBAnimation
} from 'mdbreact';

const TimerClock = () => {
  const [formData, setFormData] = React.useState(null);
  const [counter, setCounter] = React.useState(25);
  const [breaktime, setBreakTime] = React.useState(5);
  const [worktime, setWorkTime] = React.useState(25);
  const [isActive, setIsActive] = React.useState(true);
  //const [currentSession, setCurrentSession] = React.useState('New Task')

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setCounter(0);
    setIsActive(false);
  };

  //

  //records data from inputs
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  //sets breaktime
  const handleBreakTime = (event) => {
    event.preventDefault();
    setBreakTime(event.target.break.value);
    setCounter(breaktime);
    console.log(breaktime);
  };

  //sets worktime
  const handleWorkTime = (event) => {
    event.preventDefault();
    setWorkTime(event.target.work.value);
    setCounter(worktime);
    console.log(worktime);
  };

  // make this into a new component
  const renderTime = ({ remainingTime }) => {
    if ({ remainingTime } === 0) {
      return <div className="timer">Time's Up!...</div>;
    }

    return (
      <div className="timer">
        <div className="text">Time</div>
        <div className="value">{counter}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  React.useEffect(() => {
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
        {' '}
        <CountdownCircleTimer
          onComplete={() => {
            return [true]; // repeat animation in 1.5 seconds
          }}
          isPlaying
          duration={counter}
          strokeWidth="22"
          size="350"
          colors={[
            ['#8FC93A', 0.33],
            ['#FFC914', 0.2],
            ['#CC5803', 0.2],
            ['#D62828', 0.2]
          ]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <MDBAnimation type="pulse" count={7} duration="300ms">
        <MDBBtn outline color="blue" size="md" onClick={toggle}>
          <MDBIcon icon="play" />
          <span></span>
          <MDBIcon icon="pause" />
        </MDBBtn>
        <MDBBtn outline color="orange" size="md" onclick={reset}>
          <MDBIcon icon="stop" />
        </MDBBtn>
      </MDBAnimation>
      <MDBContainer style={{ width: '40%' }}>
        <form onSubmit={handleBreakTime}>
          <MDBInput
            label="Break Time"
            type="text"
            onChange={handleChange}
            name="break"
            outline
          ></MDBInput>
          <MDBBtn gradient="blue" size="sm" waves-effect>
            {' '}
            BREAK{' '}
          </MDBBtn>
        </form>
      </MDBContainer>
      <MDBContainer style={{ width: '40%' }}>
        <form onSubmit={handleWorkTime}>
          <MDBInput
            label="Work Time"
            type="text"
            name="work"
            onChange={handleChange}
            outline
          ></MDBInput>
          <MDBBtn gradient="blue" size="sm" waves-effect>
            POMODORO
          </MDBBtn>
        </form>
      </MDBContainer>

      <div>
        <MDBInput
          label="Session Name"
          onChange={handleChange}
          type="text"
          id="pomodoro-clock-task"
          name="sessionName"
          placeholder="Enter your task..."
          outline
        />
      </div>
    </div>
  );
};

export default TimerClock;
