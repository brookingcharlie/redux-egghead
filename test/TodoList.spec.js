import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import TodoList from '../src/TodoList'

chai.use(sinonChai);

describe('TodoList', () => {
  const todos = [
    {id: 0, text: 'Learn Redux', completed: false},
    {id: 1, text: 'Learn React', completed: true},
    {id: 2, text: 'Learn Guitar', completed: false}
  ];

  it('renders empty todo list', () => {
    const component = shallow(<TodoList todos={[]} />);
    expect(component.find('Todo')).to.have.length(0);
  });

  it('renders non-empty todo list', () => {
    const component = shallow(<TodoList todos={todos} />);
    expect(component.find('Todo')).to.have.length(3);
    expect(component.find('Todo').at(0).prop('completed')).to.equal(false);
    expect(component.find('Todo').at(0).prop('text')).to.equal('Learn Redux');
    expect(component.find('Todo').at(1).prop('completed')).to.equal(true);
    expect(component.find('Todo').at(1).prop('text')).to.equal('Learn React');
    expect(component.find('Todo').at(2).prop('completed')).to.equal(false);
    expect(component.find('Todo').at(2).prop('text')).to.equal('Learn Guitar');
  });

  it('invokes callback when todo toggled', () => {
    const onToggleTodo = sinon.spy();
    const component = shallow(<TodoList todos={todos} onToggleTodo={onToggleTodo} />);
    component.find('Todo').at(1).prop('onToggle')();
    expect(onToggleTodo).to.have.been.calledWith(1);
  });
});
