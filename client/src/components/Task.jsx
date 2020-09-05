import React from 'react';
import moment from 'moment';
import CompleteButton from './CompleteButton';
import DeleteButton from './DeleteButton';

const Task = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <tr key={task._id}>
          <td>{task.completed ? <strike>{task.name}</strike> : task.name}</td>
          <td>
            {task.dueDate
              ? moment(task.dueDate).format('MMM Do, YYYY')
              : 'No Due Date'}
          </td>
          <td>
            <CompleteButton task={task} />
          </td>
          <td>
            <DeleteButton id={task._id} />
          </td>
        </tr>
      ))}
    </>
  );
};

export default Task;
