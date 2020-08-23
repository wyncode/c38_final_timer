import React from 'react';
import { MDBContainer } from 'mdbreact';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Tasks from './pages/Tasks';
import Stats from './pages/Stats';
//import { AppContextProvider } from './context/AppContext';

function App() {
  return (
    <MDBContainer>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/tasks" component={Stats} />
        </Switch>
      </BrowserRouter>
    </MDBContainer>
  );
}

export default App;
