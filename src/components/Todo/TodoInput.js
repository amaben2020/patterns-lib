import React, { useState } from 'react';
import useCtx from './hooks/useCtx';

const TodoInput = ({ showEdit, setShowEdit }) => {
  const { state, selected, dispatch } = useCtx();

  const [data, setState] = useState({
    item: '',
    completed: false,
    status: 'In Progress',
  });

  const [updatedTodoTitle, setUpdatedTodoTitle] = useState('');

  const handleUpdateChange = (event) => {
    setUpdatedTodoTitle(event.target.value);
  };

  const handleUpdateTodo = (e) => {
    e.preventDefault();

    dispatch({
      type: 'EDIT_TODO',
      payload: { text: updatedTodoTitle, id: state.selected.id },
    });

    setShowEdit(false);
  };

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

    dispatch({ type: 'ADD_TODO', payload: { id: Math.random(), ...data } });
  };

  return showEdit ? (
    <form onSubmit={handleUpdateTodo}>
      <input
        onChange={handleUpdateChange}
        name='updatedItem'
        value={updatedTodoTitle}
        placeholder='Edit Todo'
      />
      <input
        onChange={handleChange}
        name='completed'
        type='checkbox'
        placeholder='Edit Todo'
      />
      <select onChange={handleChange} name='status'>
        <option value='In Progress'>In Progress</option>
        <option value='Completed'>Completed</option>
      </select>

      <button type='submit'>Submit</button>
    </form>
  ) : (
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
