import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <input ref="input" />
        <button onClick={() => {
	  this.props.onAdd(this.refs.input.value);
	  this.input.value = '';
	}}>Add todo</button>
	<ul>
	  {this.props.todos.map(todo =>
            <li
                key={todo.id}
                className={todo.completed ? 'completed' : ''}
                onClick={() => this.props.onToggle(todo.id)}>
              {todo.text}
            </li>
          )}
	</ul>
      </div>
    );
  }
}

export default TodoApp;
