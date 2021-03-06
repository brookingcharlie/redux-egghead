import React from 'react';

const Todo = ({onToggle, completed, text}) => (
  <li onClick={onToggle} className={completed ? 'completed' : ''}>{text}</li>
);

export default Todo;
