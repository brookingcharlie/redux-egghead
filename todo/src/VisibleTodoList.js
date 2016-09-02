import React from 'react';
import TodoList from './TodoList';

class VisibleTodoList extends React.Component {
  componentDidMount() {
    const {store} = this.props;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const {store} = this.props;
    const state = store.getState();
    const getVisibleTodos = (todos, filter) => {
      switch (filter) {
        case 'SHOW_ALL': return todos;
        case 'SHOW_COMPLETED': return todos.filter((t) => t.completed);
        case 'SHOW_ACTIVE': return todos.filter((t) => !t.completed);
      }
    };
    return (
      <TodoList
          todos={getVisibleTodos(state.todos, state.filter)}
	  onToggleTodo={id => store.dispatch({type: 'TOGGLE_TODO', id})}
      />
    );
  }
}

export default VisibleTodoList;
