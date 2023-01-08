export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        selected: state.todos[Number(action.payload - 1)],
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              id: todo.id,
              item: todo.item,
              status: todo.completed ? 'In Progress' : 'Completed',
              //if it was previously false, make it true
              completed: !todo.completed,
            };
          } else {
            return {
              ...todo,
            };
          }
        }),
      };

    case 'TOGGLE_DELETE':
      return {
        ...state,
        selected: state.todos.find((todo) => todo.id === action.payload.id),
        todo: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    default:
      throw new Error('Unknown action');
  }
};
