import React, { useState, useContext } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from 'mdbreact';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const TaskFormV2 = () => {
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
      <MDBRow>
        <MDBCol>
          <form onSubmit={handleTaskSubmission} style={{ width: '50%' }}>
            <p className="h4 text-center mb-4">New Task</p>
            <label htmlFor="description" className="grey-text">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="name"
              className="form-control"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="dueDate" className="grey-text">
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              className="form-control"
              onChange={handleChange}
            />
            <div className="text-center mt-4">
              <MDBBtn color="blue" type="submit">
                Add Task!
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default TaskFormV2;
