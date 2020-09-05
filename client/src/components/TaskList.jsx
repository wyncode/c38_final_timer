import React, { useEffect, useContext } from 'react';
import { MDBContainer, MDBTable, MDBTableHead } from 'mdbreact';
import Task from './Task';
import axios from 'axios';
import Search from './TaskSearch';
import { AppContext } from '../context/AppContext';

const TaskList = () => {
  const { tasks, setTasks, loading } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/tasks?sortBy=dueDate:asc', { withCredentials: true })
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => console.log(error));
  }, [setTasks, loading]);

  return (
    <MDBContainer>
      <Search />
      <MDBTable>
        <MDBTableHead color="primary-color" textWhite>
          <tr>
            <th>Desciption</th>
            <th>Due</th>
            <th></th>
            <th></th>
          </tr>
        </MDBTableHead>
        <tbody>
          <Task tasks={tasks} />
        </tbody>
      </MDBTable>
    </MDBContainer>
  );
};

export default TaskList;
