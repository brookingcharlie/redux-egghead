import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import TodoApp from '../src/TodoApp'

describe('TodoApp', () => {
  const todos = [
    {id: 0, text: 'Learn Redux', completed: false},
    {id: 1, text: 'Learn React', completed: true},
    {id: 2, text: 'Learn Guitar', completed: false}
  ];

  describe('renders markup', () => {
    it('for empty todo list', () => {
      const component = shallow(<TodoApp todos={[]} visibility="SHOW_ALL" />);
      expect(component.find('input')).to.have.length(1);
      expect(component.find('button')).to.have.length(1);
      expect(component.find('li')).to.have.length(0);
      expect(component.find('FilterLink')).to.have.length(3);
    });

    it('for non-empty todo list', () => {
      const component = shallow(<TodoApp todos={todos} visibility="SHOW_ALL" />);
      expect(component.find('input')).to.have.length(1);
      expect(component.find('button')).to.have.length(1);
      expect(component.find('li')).to.have.length(3);
      expect(component.find('li').at(0).hasClass('completed')).to.equal(false);
      expect(component.find('li').at(0).text()).to.equal('Learn Redux');
      expect(component.find('li').at(1).hasClass('completed')).to.equal(true);
      expect(component.find('li').at(1).text()).to.equal('Learn React');
      expect(component.find('li').at(2).hasClass('completed')).to.equal(false);
      expect(component.find('li').at(2).text()).to.equal('Learn Guitar');
      expect(component.find('FilterLink')).to.have.length(3);
    });
  });

  describe('applies filter', () => {
    it('for empty todo list after filter', () => {
      const todos = [{id: 0, text: 'Learn Redux', completed: false}];
      const component = shallow(<TodoApp todos={[]} visibility="SHOW_COMPLETED" />);
      expect(component.find('li')).to.have.length(0);
    });

    it('for non-empty todo list after filter', () => {
      const todos = [{id: 0, text: 'Learn Redux', completed: false}];
      const component = shallow(<TodoApp todos={todos} visibility="SHOW_ACTIVE" />);
      expect(component.find('li')).to.have.length(1);
    });
  });

  // Disabled: Enzyme shallow rendering does not support refs
  xit('invokes callback when todo added', () => {
    const onAddTodo = sinon.spy();
    const component = shallow(<TodoApp todos={todos} visibility="SHOW_ALL" onAddTodo={onAddTodo} />);
    component.find('button').simulate('click');
    expect(onAddTodo).to.have.been.called;
  });

  it('invokes callback when todo toggled', () => {
    const onToggleTodo = sinon.spy();
    const component = shallow(<TodoApp todos={todos} visibility="SHOW_ALL" onToggleTodo={onToggleTodo} />);
    component.find('li').at(1).simulate('click');
    expect(onToggleTodo).to.have.been.called;
  });

  it('configures filter links', () => {
    const onSetVisibilityFilter = () => null;
    const component = shallow(
      <TodoApp
        todos={todos}
        visibility="SHOW_ALL"
        onSetVisibilityFilter={onSetVisibilityFilter}
      />
    );
    expect(component.find('FilterLink').everyWhere(n =>
      n.prop('currentFilter') == 'SHOW_ALL' &&
      n.prop('onClick') == onSetVisibilityFilter
    )).to.equal(true);
    expect(component.find('FilterLink').at(0).prop('filter')).to.equal('SHOW_ALL');
    expect(component.find('FilterLink').at(1).prop('filter')).to.equal('SHOW_ACTIVE');
    expect(component.find('FilterLink').at(2).prop('filter')).to.equal('SHOW_COMPLETED');
  });
});
