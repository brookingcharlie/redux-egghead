import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import filterReducer from './filterReducer';

const todoAppReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

export default todoAppReducer;
