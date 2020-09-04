import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState([]);
  const [loading, setLoading] = useState(false);
  const [adder, setAdder] = useState(null);
  const [timeStampEnd, setTimeStampEnd] = useState(null);
  const [timerDuration, setTimerDuration] = useState(0);
  const [modal, setModal] = useState(false);
  const user = sessionStorage.getItem('user');
  const [timeStampStart, setTimeStampStart] = useState('');

  useEffect(() => {
    if (user && !currentUser) {
      axios
        .get('/api/users/me', {
          withCredentials: true
        })
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch((error) => console.error(error));
    }
  }, [currentUser, user]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        tasks,
        setTasks,
        taskName,
        setTaskName,
        adder,
        setAdder,
        timeStampEnd,
        setTimeStampEnd,
        timerDuration,
        setTimerDuration,
        modal,
        setModal,
        timeStampStart,
        setTimeStampStart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
