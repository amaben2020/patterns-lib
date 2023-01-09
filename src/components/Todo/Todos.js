import React, { useState } from 'react';
import useCtx from './hooks/useCtx';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const Todos = () => {
  const { state, dispatch } = useCtx();
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div style={{ padding: '150px', marginTop: '50px' }}>
      <TodoInput showEdit={showEdit} setShowEdit={setShowEdit} />
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
              Delete ❌
            </button>

            <button
              style={{ marginLeft: '20px' }}
              onClick={() => {
                dispatch({ type: 'TOGGLE_EDIT', payload: todo.id });
                setShowEdit(true);
              }}
            >
              Edit 📝
            </button>
          </>
        </div>
      ))}
    </div>
  );
};

export default Todos;
