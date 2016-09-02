import {expect} from 'chai';
import filterReducer from '../src/filterReducer';

describe('filterReducer', () => {
  describe('should handle set filter action', () => {
    it('by setting the filter', () => {
      const before = 'SHOW_INCOMPLETE';
      const action = {type: 'SET_FILTER', filter: 'SHOW_ALL'};
      expect(filterReducer(before, action)).to.eql('SHOW_ALL');
    });
    it('without mutating input', () => {
      const before = 'SHOW_INCOMPLETE';
      const action = {type: 'SET_FILTER', filter: 'SHOW_ALL'};
      filterReducer(before, action);
      expect(before).to.eql('SHOW_INCOMPLETE');
    });
  });
  it('should return current state for unrecognised action', () => {
    expect(filterReducer([], {type: 'SOMETHING_ELSE'})).to.eql([]);
  });
  it('should return initial state when current state undefined', () => {
    expect(filterReducer(undefined, {})).to.eql('SHOW_ALL');
  });
});
