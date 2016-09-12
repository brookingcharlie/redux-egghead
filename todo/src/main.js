import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import todoAppReducer from './todoAppReducer';
import TodoApp from './TodoApp';

ReactDOM.render(
  <Provider store={createStore(todoAppReducer)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
