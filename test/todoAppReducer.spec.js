import {expect} from 'chai';
import todoAppReducer from '../src/todoAppReducer';

describe('todoAppReducer', () => {
  describe('should handle add todo action', () => {
    it('by adding a todo', () => {
      const before = {todos: [], filter: 'SHOW_INCOMPLETE'};
      const action = {type: 'ADD_TODO', id: 0, text: 'Learn Redux'};
      const after = {
        todos: [{id: 0, text: 'Learn Redux', completed: false}],
        filter: 'SHOW_INCOMPLETE'
      };
      expect(todoAppReducer(before, action)).to.eql(after);
    });
    it('without mutating input', () => {
      const before = {todos: [], filter: 'SHOW_INCOMPLETE'};
      const beforeCopy = Object.assign({}, before);
      const action = {type: 'ADD_TODO', id: 0, text: 'Learn Redux'};
      todoAppReducer(before, action);
      expect(before).to.eql(beforeCopy);
    });
  });
  describe('should handle set filter action', () => {
    it('by setting the filter', () => {
      const before = {todos: [], filter: 'SHOW_INCOMPLETE'};
      const action = {type: 'SET_FILTER', filter: 'SHOW_ALL'};
      const after = {todos: [], filter: 'SHOW_ALL'};
      expect(todoAppReducer(before, action)).to.eql(after);
    });
    it('without mutating input', () => {
      const before = {todos: [], filter: 'SHOW_INCOMPLETE'};
      const beforeCopy = Object.assign({}, before);
      const action = {type: 'SET_FILTER', filter: 'SHOW_ALL'};
      todoAppReducer(before, action);
      expect(before).to.eql(beforeCopy);
    });
  });
  it('should return current state for unrecognised action', () => {
    const state = {todos: [], filter: 'SHOW_ALL'};
    expect(todoAppReducer(state, {type: 'SOMETHING_ELSE'})).to.eql(state);
  });
  it('should return initial state when current state undefined', () => {
    const initialState = {todos: [], filter: 'SHOW_ALL'};
    expect(todoAppReducer(undefined, {})).to.eql(initialState);
  });
});
