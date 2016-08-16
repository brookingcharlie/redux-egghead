import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import todoAppReducer from './todoAppReducer';
import TodoApp from './TodoApp';

const store = createStore(todoAppReducer);

let nextTodoId = 0;

// Update the DOM in response to current application state
const render = () => {
  ReactDOM.render(
    <TodoApp
        todos={store.getState().todos}
        visibility={store.getState().visibility}
        onAdd={(text) => store.dispatch({type: 'ADD_TODO', text: text, id: nextTodoId++})}
        onToggle={(id) => store.dispatch({type: 'TOGGLE_TODO', id: id})}
        onSetVisibilityFilter={(filter) => store.dispatch({type: 'SET_VISIBILITY_FILTER', filter})}
    />,
    document.getElementById('root')
  );
};

// Render whenever store changes
store.subscribe(render);

// Render initial state
render();
