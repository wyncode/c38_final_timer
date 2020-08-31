import React, { useEffect, useState} from "react";
import "./timer.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { MDBInput, MDBBtn, MDBContainer } from "mdbreact";

const TimerClock = () => {
  const [formData, setFormData] = useState(null);
  const [counter, setCounter] = useState(25);
  const [breaktime, setBreakTime] = useState(5);
  const [worktime, setWorkTime] = useState(25);
  const [isActive, setIsActive] = useState(true);
  const [key, setKey] = useState(0);
  //const [currentSession, setCurrentSession] = React.useState('New Task')

  
  //sets the session to active 
  const toggle = () => {
    setIsActive(!isActive);
  };

  //resets count to 0
  const reset = () => {
    setCounter(0);
    setIsActive(false);
    setKey(prevKey => prevKey + 1);
  };

  //records data from inputs
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  //sets breaktime
  const handleBreakTime = (event) => {
    event.preventDefault();
    setBreakTime(event.target.break.value);
    setCounter(breaktime);
    setKey(prevKey => prevKey + 1);
  };

  //sets worktime
  const handleWorkTime = (event) => {
    event.preventDefault();
    setWorkTime(event.target.work.value);
    setCounter(worktime);
    setKey(prevKey => prevKey + 1);
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
      <MDBContainer>
      <form onSubmit={handleBreakTime}>
        <MDBInput label="Break Time" type="text" onChange={handleChange} name="break" outline></MDBInput>
        <button gradient="blue" className="breaktime" valueDefault={breaktime}> BREAK  </button>
      </form>
      </MDBContainer>
      <MDBContainer>
      <form onSubmit={handleWorkTime}>
        <MDBInput label="Work Time" type="text" name="work" onChange={handleChange} outline></MDBInput>
        <button gradient="blue" className="worktime" valueDefault={worktime}>POMODORO</button>
      </form>
      </MDBContainer>
      <div id="pomodoro-timer">
        {" "}
        <CountdownCircleTimer
          key={key}
          isPlaying={isActive}
          duration={counter}
          colors={[["#4e89ae", 0.33], ["#43658b", 0.33], ["#ed6663"]]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div>
        <h1>{counter}</h1>
      </div>
      <div>
        <div>
          <MDBInput label="Session Name"
            onChange={handleChange}
            type="text"
            id="pomodoro-clock-task"
            name="sessionName"
            placeholder="Enter your task..."
          outline 
          />
        </div>
        <MDBBtn gradient="blue" onClick={toggle}> START/ PAUSE </MDBBtn>
        <MDBBtn gradient="blue" onClick={reset}> RESET </MDBBtn>
      </div>
    </div>
  );
};

export default TimerClock;
