import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import visibilityReducer from './visibilityReducer';

const todoAppReducer = combineReducers({
  todos: todoReducer,
  visibility: visibilityReducer
});

export default todoAppReducer;
