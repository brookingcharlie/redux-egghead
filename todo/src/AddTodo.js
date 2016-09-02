import React from 'react';

const AddTodo = ({store}) => {
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

export default AddTodo;
