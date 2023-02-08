export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case 'EDIT_TODO':
      const { text, id } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === String(id)) {
            return {
              ...todo,
              item: text,
            };
          }
          return todo;
        }),
      };

    case 'TOGGLE_COMPLETE':
      return {
        ...state,
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
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case 'TOGGLE_EDIT':
      return {
        ...state,
        selected: state.todos[Number(action.payload - 1)],
      };

    default:
      throw new Error('Unknown action');
  }
};
