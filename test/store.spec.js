import {expect} from 'chai';
import sinon from 'sinon';
import store from '../src/store';

describe('store', () => {
  it('should return initial state', () => {
    expect(store.getState()).to.equal(0);
  });

  it('should invoke subscribed function on action dispatch', () => {
    const spy = sinon.spy();
    store.subscribe(spy);
    store.dispatch({type: 'INCREMENT'});
    expect(spy).to.have.been.called;
  });
});
