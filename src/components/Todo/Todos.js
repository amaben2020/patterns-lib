import React from 'react';
import useCtx from './hooks/useCtx';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const Todos = () => {
  const { state, dispatch } = useCtx();

  return (
    <div style={{ padding: '150px' }}>
      <TodoInput />
      {state.todos.map((todo) => (
        <div key={todo.id}>
          <>
            <TodoItem
              item={todo.item}
              status={todo.status}
              completed={todo.completed}
              onClick={() =>
                dispatch({ type: 'TOGGLE_COMPLETE', payload: todo.id })
              }
            />

            <button
              onClick={() =>
                dispatch({ type: 'TOGGLE_DELETE', payload: todo.id })
              }
            >
              Delete
            </button>
          </>
        </div>
      ))}
    </div>
  );
};

export default Todos;
