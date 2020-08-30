import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { MDBContainer } from 'mdbreact';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const TaskForm = () => {
  const [taskData, setTaskData] = useState(null);
  const { setLoading } = useContext(AppContext);

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleTaskSubmission = async (e) => {
    const form = e.target;
    setLoading(true);
    e.preventDefault();
    axios
      .post('/api/tasks', taskData, { withCredentials: true })
      .then((res) => {
        console.log(res);
        setTaskData(null);
        form.reset();
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <MDBContainer>
      <Form onSubmit={handleTaskSubmission}>
        <Form.Group>
          <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control
            id="description"
            type="text"
            name="description"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="dueDate">Due Date</Form.Label>
          <Form.Control
            id="dueDate"
            type="date"
            name="dueDate"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit">Add Task</Button>
        </Form.Group>
      </Form>
    </MDBContainer>
  );
};

export default TaskForm;
