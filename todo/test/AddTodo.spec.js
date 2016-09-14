import chai, {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import AddTodo from '../src/AddTodo';

chai.use(sinonChai);

describe('AddTodo', () => {
  // Use double-shallow trick to render inner component
  // See https://github.com/reactjs/redux/issues/1534#issuecomment-205061049
  it('renders markup', () => {
    const store = {getState: () => ({}), subscribe: () => null, dispatch: () => null};
    const component = shallow(<AddTodo />, {context: {store}}).shallow();
    expect(component.find('input')).to.have.length(1);
    expect(component.find('button')).to.have.length(1);
  });

  // Use mount since Enzyme shallow rendering does not support refs
  it('invokes callback when todo added', () => {
    const store = {getState: () => ({}), subscribe: () => null, dispatch: sinon.spy()};
    const component = mount(<AddTodo />, {context: {store}});
    component.find('input').node.value = 'foo';
    component.find('button').simulate('click');
    expect(store.dispatch).to.have.been.calledWith({type: 'ADD_TODO', id: 0, text: 'foo'});
  });
});
