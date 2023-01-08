import React from 'react';
import useCtx from './hooks/useCtx';

const Todos = () => {
  const { state, dispatch } = useCtx();
  console.log(state);
  return (
    <div style={{ padding: '150px' }}>
      {state.todos.map((todo) => (
        <button
          onClick={() => {
            dispatch({ type: 'TOGGLE_COMPLETE', payload: todo.id });
            // dispatch({ type: 'TOGGLE_COMPLETE_FALSE', payload: todo.id });
          }}
          key={todo.id}
        >
          {todo.item} === {todo.status}
        </button>
      ))}
    </div>
  );
};

export default Todos;
