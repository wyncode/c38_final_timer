import React, { useContext } from 'react';
import { MDBContainer } from 'mdbreact';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import { AppContext } from './context/AppContext';
import PrivateRoute from './components/PrivateRoute';
import UsersNav from './components/UsersNav';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Scheduler from './pages/Scheduler';
import TaskStats from './pages/MyTasks';
import FAQs from './pages/FAQs';
import Team from './pages/Team';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';

function App() {
  const { currentUser } = useContext(AppContext);
  const user = sessionStorage.getItem('user');
  console.log(user);
  return (
    <MDBContainer fluid>
      <BrowserRouter>
        {currentUser ? <UsersNav /> : <Nav />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/faqs" component={FAQs} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/updatepassword" component={UpdatePassword} />
          <PrivateRoute exact path="/tasks" component={TaskStats} />
          <PrivateRoute exact path="/scheduler" component={Scheduler} />
        </Switch>
      </BrowserRouter>
    </MDBContainer>
  );
}

export default App;
