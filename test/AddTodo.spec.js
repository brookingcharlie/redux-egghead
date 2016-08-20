import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import AddTodo from '../src/AddTodo';

describe('AddTodo', () => {
  it('renders markup', () => {
    const component = shallow(<AddTodo onAddTodo={() => null} />);
    expect(component.find('input')).to.have.length(1);
    expect(component.find('button')).to.have.length(1);
  });

  // Disabled: Enzyme shallow rendering does not support refs
  xit('invokes callback when todo added', () => {
    const onAddTodo = sinon.spy();
    const component = shallow(<AddTodo onAddTodo={onAddTodo} />);
    component.find('button').simulate('click');
    expect(onAddTodo).to.have.been.called;
  });
});
