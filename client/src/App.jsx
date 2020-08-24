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
import FAQs from './pages/FAQs'


//import { AppContextProvider } from './context/AppContext';

function App() {
  return (
    <MDBContainer fluid>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/stats" component={Stats} />
<<<<<<< HEAD
          <Route exact path="/faqs" component={FAQs} />
        
=======
>>>>>>> 97c065d213f20a0b4cd84ac5ec7163f78ae0a182
        </Switch>
      </BrowserRouter>
    </MDBContainer>
  );
}

export default App;
