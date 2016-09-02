import {expect} from 'chai';
import todoReducer from '../src/todoReducer';

describe('todoReducer', () => {
  describe('should handle add todo action', () => {
    it('by adding a todo', () => {
      const before = [];
      const action = {type: 'ADD_TODO', id: 0, text: 'Learn Redux'};
      const after = [{id: 0, text: 'Learn Redux', completed: false}];
      expect(todoReducer(before, action)).to.eql(after);
    });
    it('without mutating input', () => {
      const before = [];
      const action = {type: 'ADD_TODO', id: 0, text: 'Learn Redux'};
      todoReducer(before, action);
      expect(before).to.eql([]);
    });
  });
  describe('should handle toggle todo action', () => {
    it('by toggling a todo', () => {
      const before = [
        {id: 0, text: 'Learn Redux', completed: false},
        {id: 1, text: 'Learn React', completed: false},
      ];
      const action = {type: 'TOGGLE_TODO', id: 1};
      const after = [
        {id: 0, text: 'Learn Redux', completed: false},
        {id: 1, text: 'Learn React', completed: true},
      ];
      expect(todoReducer(before, action)).to.eql(after);
    });
    it('without mutating input', () => {
      const before = [
        {id: 0, text: 'Learn Redux', completed: false},
        {id: 1, text: 'Learn React', completed: false},
      ];
      const beforeCopy = before.slice();
      const action = {type: 'TOGGLE_TODO', id: 1};
      todoReducer(before, action);
      expect(before).to.eql(beforeCopy);
    });
  });
  it('should return current state for unrecognised action', () => {
    expect(todoReducer([], {type: 'SOMETHING_ELSE'})).to.eql([]);
  });
  it('should return initial state when current state undefined', () => {
    expect(todoReducer(undefined, {})).to.eql([]);
  });
});
