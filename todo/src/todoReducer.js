// Define reducer for state representing an individual todo object
const individualTodoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {id: action.id, text: action.text, completed: false};
    case 'TOGGLE_TODO':
      return (state.id === action.id)
        ? Object.assign({}, state, {completed: !state.completed})
        : state;
    default:
      return state;
  }
};

// Apply reducer composition pattern to extent to a list of todo objects
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([individualTodoReducer(undefined, action)]);
    case 'TOGGLE_TODO':
      return state.map(t => individualTodoReducer(t, action));
    default:
      return state;
  }
};

export default todoReducer;
