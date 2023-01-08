import React from 'react';
import useCtx from './hooks/useCtx';

const Todos = () => {
  const { state } = useCtx();
  return (
    <div style={{ padding: '150px' }}>
      {state.todos.map((todo) => (
        <div>{todo.item}</div>
      ))}
    </div>
  );
};

export default Todos;
