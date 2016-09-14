import React from 'react';
import {connect} from 'react-redux';

let AddTodo = ({dispatch}) => {
  let nextTodoId = 0;
  let input;
  return (
    <div>
      <input ref={(node) => {input = node;}} />
      <button onClick={() => {
        dispatch({type: 'ADD_TODO', id: nextTodoId++, text: input.value})
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
