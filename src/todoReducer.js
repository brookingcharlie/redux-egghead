const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {id: action.id, text: action.text, completed: false};
      return state.concat([todo]);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
        ? Object.assign({}, todo, {completed: !todo.completed})
        : todo
      );
    default:
      return state;
  }
};

export default todoReducer;
