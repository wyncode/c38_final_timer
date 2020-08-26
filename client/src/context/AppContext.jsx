import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [contextMessage, setContextMessage] = useState('');
  const [chartData, setChartData] = useState({});

  const contextMethod = () => {
    setContextMessage('Hello from client/src/context/AppContext.jsx');
  };

  return (
    <AppContext.Provider
      value={{
        contextMessage,
        contextMethod
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
