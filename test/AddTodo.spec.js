import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import AddTodo from '../src/AddTodo';

describe('AddTodo', () => {
  it('renders markup', () => {
    const component = shallow(<AddTodo onAddTodo={() => null} />);
    expect(component.find('input')).to.have.length(1);
    expect(component.find('button')).to.have.length(1);
  });

  // Use mount since Enzyme shallow rendering does not support refs
  it('invokes callback when todo added', () => {
    const store = {dispatch: sinon.stub()};
    const component = mount(<AddTodo store={store} />);
    component.find('input').node.value = 'foo';
    component.find('button').simulate('click');
    expect(store.dispatch).to.have.been.calledWith({type: 'ADD_TODO', id: 0, text: 'foo'});
  });
});
