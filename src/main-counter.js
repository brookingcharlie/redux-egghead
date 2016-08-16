import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import counterReducer from './counterReducer';
import Counter from './Counter';

const store = createStore(counterReducer);

// Update the DOM in response to current application state
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />,
    document.getElementById('root')
  );
};

// Render whenever store changes
store.subscribe(render);

// Render initial state
render();
