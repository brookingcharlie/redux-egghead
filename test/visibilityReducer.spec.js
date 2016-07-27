import {expect} from 'chai';
import visibilityReducer from '../src/visibilityReducer';

describe('visibilityReducer', () => {
  describe('should handle set visibility filter action', () => {
    it('by toggling a visibility', () => {
      const before = 'SHOW_INCOMPLETE';
      const action = {type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL'};
      expect(visibilityReducer(before, action)).to.eql('SHOW_ALL');
    });
    it('without mutating input', () => {
      const before = 'SHOW_INCOMPLETE';
      const action = {type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL'};
      visibilityReducer(before, action);
      expect(before).to.eql('SHOW_INCOMPLETE');
    });
  });
  it('should return current state for unrecognised action', () => {
    expect(visibilityReducer([], {type: 'SOMETHING_ELSE'})).to.eql([]);
  });
  it('should return initial state when current state undefined', () => {
    expect(visibilityReducer(undefined, {})).to.eql('SHOW_ALL');
  });
});
