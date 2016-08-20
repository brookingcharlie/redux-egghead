import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

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
        <Footer
            visibility={this.props.visibility}
            onSetVisibilityFilter={this.props.onSetVisibilityFilter}
        />
      </div>
    );
  }
}

export default TodoApp;
