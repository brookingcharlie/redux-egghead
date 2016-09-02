import {expect} from 'chai';
import {addCounter, removeCounter, incrementCounter} from '../src/manageCounters';

describe('manageCounters', () => {
  describe('addCounter', () => {
    it('appends counter to empty list', () => {
      expect(addCounter([])).to.eql([0]);
    });
    it('appends counter to non-empty list', () => {
      expect(addCounter([1, 2])).to.eql([1, 2, 0]);
    });
    it('does not mutate input', () => {
      const list = [];
      addCounter(list);
      expect(list).to.eql([]);
    });
  });
  describe('removeCounter', () => {
    it('removes counter from start', () => {
      expect(removeCounter([1, 2], 0)).to.eql([2]);
    });
    it('removes counter from end', () => {
      expect(removeCounter([1, 2], 1)).to.eql([1]);
    });
    it('removes counter from middle', () => {
      expect(removeCounter([1, 2, 3], 1)).to.eql([1, 3]);
    });
    it('does not mutate input', () => {
      const list = [1, 2, 3];
      removeCounter(list, 0);
      expect(list).to.eql([1, 2, 3]);
    });
  });
  describe('incrementCounter', () => {
    it('increments counter at start', () => {
      expect(incrementCounter([1, 3], 0)).to.eql([2, 3]);
    });
    it('increments counter in middle', () => {
      expect(incrementCounter([1, 2, 4], 1)).to.eql([1, 3, 4]);
    });
    it('increments counter at end', () => {
      expect(incrementCounter([1, 3], 1)).to.eql([1, 4]);
    });
    it('does not mutate input', () => {
      const list = [1, 2, 3];
      incrementCounter(list, 0);
      expect(list).to.eql([1, 2, 3]);
    });
  });
});
