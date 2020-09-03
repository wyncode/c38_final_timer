import React, { useContext } from 'react';
import { MDBDropdownItem } from 'mdbreact';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Logout = () => {
  const history = useHistory();
  const { setCurrentUser } = useContext(AppContext);

  const handleSignOut = () => {
    axios
      .post('/api/users/logout', { withCredentials: true })
      .then(() => {
        setCurrentUser(null);
        sessionStorage.removeItem('user');
        history.push('/login');
      })
      .catch((error) => console.log(error));
  };

  return <MDBDropdownItem onClick={handleSignOut}>Logout</MDBDropdownItem>;
};

export default Logout;
