import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import visibilityReducer from './visibilityReducer';

const todoApp = combineReducers({
  todos: todoReducer,
  visibility: visibilityReducer
});

export default todoApp;
