import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Tasks from './pages/Tasks';
import Stats from './pages/Stats';
import FAQs from './pages/FAQs';
import ForgotPassword from './pages/ForgotPassword';
import Navigation from './components/Navigation';
import { Line } from 'react-chartjs-2';

//import { AppContextProvider } from './context/AppContext';

function App() {
  return (
    <MDBContainer fluid>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/stats" component={Stats} />
          <Route exact path="/faqs" component={FAQs} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
        </Switch>
      </BrowserRouter>
    </MDBContainer>
  );
}

export default App;
