import React from 'react';

const AddTodo = ({onAddTodo}) => {
  let input;
  return (
    <div>
      <input ref={(node) => {input = node;}} />
      <button onClick={() => {
        onAddTodo(input.value);
        input.value = '';
      }}>Add todo</button>
    </div>
  );
};

export default AddTodo;
