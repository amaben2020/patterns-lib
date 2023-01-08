import React from 'react';
import useCtx from './hooks/useCtx';
import TodoItem from './TodoItem';

const Todos = () => {
  const { state, dispatch } = useCtx();

  return (
    <div style={{ padding: '150px' }}>
      {state.todos.map((todo) => (
        <div
          onClick={() => {
            dispatch({ type: 'TOGGLE_COMPLETE', payload: todo.id });
          }}
          key={todo.id}
        >
          <TodoItem
            item={todo.item}
            status={todo.status}
            completed={todo.completed}
          />
        </div>
      ))}
    </div>
  );
};

export default Todos;
