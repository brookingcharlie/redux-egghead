import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import todoAppReducer from './todoAppReducer';
import TodoApp from './TodoApp';

ReactDOM.render(
  <TodoApp store={createStore(todoAppReducer)} />,
  document.getElementById('root')
);
