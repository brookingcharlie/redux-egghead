import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

const TodoList = ({todos, onToggleTodo}) => (
  <ul>
    {todos.map(todo => (
      <Todo
          key={todo.id}
          onToggle={() => onToggleTodo(todo.id)}
          completed={todo.completed}
          text={todo.text}
      />
    ))}
  </ul>
);

export default TodoList;
