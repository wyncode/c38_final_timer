import React, { useEffect, useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import { MDBContainer, MDBTable, MDBTableHead } from 'mdbreact';
import Task from './Task';
import axios from 'axios';
import Search from './TaskSearch';
import { AppContext } from '../context/AppContext';

const TaskList = () => {
  const {
    setTasks,
    setFilteredTasks,
    search,
    loading,
    filteredTasks
  } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/tasks?sortBy=dueDate:asc', { withCredentials: true })
      .then((response) => {
        setTasks(response.data);
        setFilteredTasks(response.data);
      })
      .catch((error) => console.log(error));
    // the items in the dependency array will trigger the useEffect when their values are changed
  }, [setTasks, setFilteredTasks, search, loading]);

  return (
    <MDBContainer>
      <Search />
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>Desciption</th>
            <th>Due</th>
            <th></th>
          </tr>
        </MDBTableHead>
        <tbody>
          <Task tasks={filteredTasks} />
        </tbody>
      </MDBTable>
    </MDBContainer>
  );
};

export default TaskList;
