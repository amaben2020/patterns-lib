import React, { useState } from 'react';
import useCtx from './hooks/useCtx';

const TodoInput = () => {
  const [data, setState] = useState({
    item: '',
    completed: false,
    status: 'In Progress',
  });
  const { _, dispatch } = useCtx();
  const handleChange = (event) => {
    setState((p) => {
      return {
        ...p,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: data });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} name='item' value={data.item} />
      <input onChange={handleChange} name='completed' type='checkbox' />
      <select onChange={handleChange} name='status'>
        <option value='In Progress'>In Progress</option>
        <option value='Completed'>Completed</option>
      </select>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default TodoInput;
