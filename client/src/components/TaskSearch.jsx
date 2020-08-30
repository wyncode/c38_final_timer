import React, { useContext } from 'react';
import { FormControl } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const TaskSearch = () => {
  const { setSearch, search } = useContext(AppContext);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div>
      <FormControl
        type="text"
        placeholder="Search tasks..."
        className="mb-4"
        onChange={handleSearch}
      />
    </div>
  );
};

export default TaskSearch;
