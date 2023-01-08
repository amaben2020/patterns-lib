import React, { useMemo, useReducer } from 'react';
import { todoReducer } from './reducer/todoReducer';
import { TodoContext } from './TodoContext';

const TodoState = ({ children }) => {
  const INITIAL_STATE = {
    todos: [
      {
        id: '1',
        item: 'Practice React',
        status: 'In Progress',
        completed: false,
      },
      {
        id: '2',
        item: 'Practice Redux',
        status: 'In Progress',
        completed: false,
      },
      {
        id: '3',
        item: 'Practice Node js',
        status: 'Completed',
        completed: true,
      },
    ],
    selected: null,
  };

  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const contextValues = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );

  return (
    <TodoContext.Provider value={contextValues}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
