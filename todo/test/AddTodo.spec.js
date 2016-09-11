import chai, {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import AddTodo from '../src/AddTodo';

chai.use(sinonChai);

describe('AddTodo', () => {
  it('renders markup', () => {
    const component = shallow(<AddTodo onAddTodo={() => null} />);
    expect(component.find('input')).to.have.length(1);
    expect(component.find('button')).to.have.length(1);
  });

  // Use mount since Enzyme shallow rendering does not support refs
  it('invokes callback when todo added', () => {
    const store = {dispatch: sinon.spy()};
    const component = mount(<AddTodo store={store} />);
    component.find('input').node.value = 'foo';
    component.find('button').simulate('click');
    expect(store.dispatch).to.have.been.calledWith({type: 'ADD_TODO', id: 0, text: 'foo'});
  });
});
