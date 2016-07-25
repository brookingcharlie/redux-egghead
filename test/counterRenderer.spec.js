import {expect} from 'chai'
import counterReducer from '../src/counterReducer'

describe('counterReducer', () => {
  it('should increment', () => {
    expect(counterReducer(0, {type: 'INCREMENT'})).to.equal(1);
    expect(counterReducer(1, {type: 'INCREMENT'})).to.equal(2);
  });

  it('should handle decrement action', () => {
    expect(counterReducer(2, {type: 'DECREMENT'})).to.equal(1);
    expect(counterReducer(1, {type: 'DECREMENT'})).to.equal(0);
  });

  it('should return current state for unrecognised action', () => {
    expect(counterReducer(1, {type: 'SOMETHING_ELSE'})).to.equal(1);
  });

  it('should return initial state when current state undefined', () => {
    expect(counterReducer(undefined, {})).to.equal(0);
  });
});
