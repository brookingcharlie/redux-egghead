import {expect} from 'chai'
import counter from '../src/counter'

describe('counter', () => {
  it('should increment', () => {
    expect(counter(0, {type: 'INCREMENT'})).to.equal(1);
    expect(counter(1, {type: 'INCREMENT'})).to.equal(2);
  });

  it('should handle decrement action', () => {
    expect(counter(2, {type: 'DECREMENT'})).to.equal(1);
    expect(counter(1, {type: 'DECREMENT'})).to.equal(0);
  });

  it('should return current state for unrecognised action', () => {
    expect(counter(1, {type: 'SOMETHING_ELSE'})).to.equal(1);
  });

  it('should return initial state when current state undefined', () => {
    expect(counter(undefined, {})).to.equal(0);
  });
});
