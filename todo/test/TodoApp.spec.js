import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import TodoApp from '../src/TodoApp'

describe('TodoApp', () => {
  it('renders', () => {
    const component = shallow(<TodoApp />);
    expect(component.find('div')).to.have.length(1);
    expect(component.find('div AddTodo')).to.have.length(1);
    expect(component.find('div VisibleTodoList')).to.have.length(1);
    expect(component.find('div Footer')).to.have.length(1);
  });
});
