import React from 'react';
import ReactDOM from 'react-dom';

const Todo = ({onToggle, completed, text}) => (
  <li onClick={onToggle} className={completed ? 'completed' : ''}>{text}</li>
);

export default Todo;
