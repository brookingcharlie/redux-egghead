import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import TodoApp from '../src/TodoApp'

describe('TodoApp', () => {
  it('renders', () => {
    const store = {};
    const component = shallow(<TodoApp store={store} />);
    expect(component.find('div')).to.have.length(1);
    expect(component.find('div AddTodo').prop('store')).to.equal(store);
    expect(component.find('div VisibleTodoList').prop('store')).to.equal(store);
    expect(component.find('div Footer').prop('store')).to.equal(store);
  });
});
