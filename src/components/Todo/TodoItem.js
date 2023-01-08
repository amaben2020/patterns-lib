import React from 'react';
import './style.css';

const TodoItem = ({ item, status, completed }) => {
  return (
    <div className='wrapper' data-variant={String(status).toLowerCase()}>
      <h1>{item}</h1>
      <h5>{status}</h5>
      <h5>{completed ? 'Completed' : 'Not Completed'}</h5>
    </div>
  );
};

export default TodoItem;
