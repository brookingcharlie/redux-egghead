import React from 'react';
import {connect} from 'react-redux';

let nextTodoId = 0;

const addTodo = (text) => ({type: 'ADD_TODO', id: nextTodoId++, text: text});

let AddTodo = ({dispatch}) => {
  let input;
  return (
    <div>
      <input ref={(node) => {input = node;}} />
      <button onClick={() => {
        dispatch(addTodo(input.value))
        input.value = '';
      }}>Add todo</button>
    </div>
  );
};

// Call connect without arguments:
// - no mapStateToProps implies {}
// - no mapDispatchToProps implies {dispatch}
AddTodo = connect()(AddTodo);

export default AddTodo;
