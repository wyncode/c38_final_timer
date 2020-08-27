import React from 'react';
import { MDBContainer } from 'mdbreact';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
//import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Tasks from './pages/Tasks';
import Stats from './pages/Stats';
import FAQs from './pages/FAQs';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';
import Navigation from './components/Navigation';
// import { Line } from 'react-chartjs-2';

//import { AppContextProvider } from './context/AppContext';

function App() {
  return (
    <AppContextProvider>
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
            <Route exact path="/updatepassword" component={UpdatePassword} />
          </Switch>
        </BrowserRouter>
      </MDBContainer>
    </AppContextProvider>
  );
}

export default App;
