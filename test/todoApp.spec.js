import {expect} from 'chai';
import todoApp from '../src/todoApp';

describe('todoApp', () => {
  describe('should handle add todo action', () => {
    it('by adding a todo', () => {
      const before = {todos: [], visibility: 'SHOW_INCOMPLETE'};
      const action = {type: 'ADD_TODO', id: 0, text: 'Learn Redux'};
      const after = {
        todos: [{id: 0, text: 'Learn Redux', completed: false}],
        visibility: 'SHOW_INCOMPLETE'
      };
      expect(todoApp(before, action)).to.eql(after);
    });
    it('without mutating input', () => {
      const before = {todos: [], visibility: 'SHOW_INCOMPLETE'};
      const beforeCopy = Object.assign({}, before);
      const action = {type: 'ADD_TODO', id: 0, text: 'Learn Redux'};
      todoApp(before, action);
      expect(before).to.eql(beforeCopy);
    });
  });
  describe('should handle set visibility filter action', () => {
    it('by toggling a visibility', () => {
      const before = {todos: [], visibility: 'SHOW_INCOMPLETE'};
      const action = {type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL'};
      const after = {todos: [], visibility: 'SHOW_ALL'};
      expect(todoApp(before, action)).to.eql(after);
    });
    it('without mutating input', () => {
      const before = {todos: [], visibility: 'SHOW_INCOMPLETE'};
      const beforeCopy = Object.assign({}, before);
      const action = {type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL'};
      todoApp(before, action);
      expect(before).to.eql(beforeCopy);
    });
  });
  it('should return current state for unrecognised action', () => {
    const state = {todos: [], visibility: 'SHOW_ALL'};
    expect(todoApp([], {type: 'SOMETHING_ELSE'})).to.eql(state);
  });
  it('should return initial state when current state undefined', () => {
    const initialState = {todos: [], visibility: 'SHOW_ALL'};
    expect(todoApp(undefined, {})).to.eql(initialState);
  });
});
