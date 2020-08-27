import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

<<<<<<< HEAD
export const AppContextProvider = ({ children }) => {
  const [contextMessage, setContextMessage] = useState('');
  const [chartData, setChartData] = useState({});
=======
const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = sessionStorage.getItem('user');
>>>>>>> 919ad58dda182d3ff586ce7abf0d817340f81d6d

  useEffect(() => {
    // incase user refreshes local session is cleared.
    if (user && !currentUser) {
      axios
        .get(`/api/users/me`, {
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
        setTasks
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
