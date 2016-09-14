import React from 'react';
import {connect} from 'react-redux';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL': return todos;
    case 'SHOW_COMPLETED': return todos.filter((t) => t.completed);
    case 'SHOW_ACTIVE': return todos.filter((t) => !t.completed);
  }
};

// Map redux store state to data props of component
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.filter)
});

// Map dispatch method of store to callback props of component
const mapDispatchToProps = (dispatch) => ({
  onToggleTodo: (id) => {dispatch({type: 'TOGGLE_TODO', id});}
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
