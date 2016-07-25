import {expect} from 'chai';
import sinon from 'sinon';
import {createStore} from 'redux';
import counterReducer from '../src/counterReducer';

describe('store', () => {
  it('should return initial state', () => {
    const store = createStore(counterReducer);
    expect(store.getState()).to.equal(0);
  });

  it('should invoke subscribed function on action dispatch', () => {
    const store = createStore(counterReducer);
    const spy = sinon.spy();
    store.subscribe(spy);
    store.dispatch({type: 'INCREMENT'});
    expect(spy).to.have.been.called;
  });
});
