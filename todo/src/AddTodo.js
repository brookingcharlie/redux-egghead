import React from 'react';

const AddTodo = (props, {store}) => {
  let nextTodoId = 0;
  let input;
  return (
    <div>
      <input ref={(node) => {input = node;}} />
      <button onClick={() => {
        store.dispatch({type: 'ADD_TODO', id: nextTodoId++, text: input.value})
        input.value = '';
      }}>Add todo</button>
    </div>
  );
};
AddTodo.contextTypes = {
  store: React.PropTypes.object
};

export default AddTodo;
