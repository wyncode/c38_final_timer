import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { AppContextProvider } from './context/AppContext';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById('root')
);
