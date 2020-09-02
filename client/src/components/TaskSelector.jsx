import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';
import { AppContext } from '../context/AppContext';

const TaskSelector = ({ setTaskId }) => {
  const { tasks, setTasks, setTaskName, taskName } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/tasks', { withCredentials: true })
      .then((response) => {
        setTasks(response.data);
        // console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <MDBDropdown dropright className="mb-5">
      <MDBDropdownToggle caret color="primary">
        Associated Task
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        {tasks.map((task) => (
          <MDBDropdownItem
            onClick={() => {
              setTaskName(task.name);
              setTaskId(task._id);
            }}
            key={task.name}
          >
            {task.name}
          </MDBDropdownItem>
        ))}
      </MDBDropdownMenu>
      {<label>{taskName}</label>}
    </MDBDropdown>
  );
  console.log(taskName);
};

export default TaskSelector;
