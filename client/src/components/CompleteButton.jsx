import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const CompleteButton = ({ task }) => {
  const { setLoading } = useContext(AppContext);

  const toggleComplete = () => {
    setLoading(true);
    axios
      .patch(
        `/api/tasks/${task._id}`,
        { completed: !task.completed },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        setLoading(false);
      })
      .catch((error) => console.log(error.toString()));
  };

  return (
    <MDBBtn
      className="mr-2"
      gradient="dusty-grass"
      onClick={toggleComplete}
      variant={task.completed ? 'success' : 'secondary'}
      style={{ width: 150 }}
    >
      <strong>{task.completed ? 'Mark Incomplete' : 'Mark Complete'}</strong>
    </MDBBtn>
  );
};

export default CompleteButton;
