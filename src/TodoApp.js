import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterLink from './FilterLink';

class TodoApp extends React.Component {
  render() {
    const getVisibleTodos = (todos, filter) => {
      switch (filter) {
        case 'SHOW_ALL': return todos;
        case 'SHOW_COMPLETED': return todos.filter((t) => t.completed);
        case 'SHOW_ACTIVE': return todos.filter((t) => !t.completed);
      }
    };
    const visibleTodos = getVisibleTodos(this.props.todos, this.props.visibility);
    return (
      <div>
        <AddTodo onAddTodo={this.props.onAddTodo} />
        <TodoList
            todos={visibleTodos}
	    onToggleTodo={this.props.onToggleTodo}
	/>
        <p>
          Show:{' '}
          <FilterLink
              filter="SHOW_ALL"
              currentFilter={this.props.visibility}
              onClick={this.props.onSetVisibilityFilter}
            >All</FilterLink>{' '}
          <FilterLink
              filter="SHOW_ACTIVE"
              currentFilter={this.props.visibility}
              onClick={this.props.onSetVisibilityFilter}
            >Active</FilterLink>{' '}
          <FilterLink
              filter="SHOW_COMPLETED"
              currentFilter={this.props.visibility}
              onClick={this.props.onSetVisibilityFilter}
            >Completed</FilterLink>
        </p>
      </div>
    );
  }
}

export default TodoApp;
