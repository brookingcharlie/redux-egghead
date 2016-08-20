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

  it('renders markup', () => {
    const component = shallow(<TodoApp todos={todos} visibility="SHOW_ALL" />);
    expect(component.find('AddTodo')).to.have.length(1);
    expect(component.find('TodoList').prop('todos')).to.equal(todos);
    expect(component.find('FilterLink')).to.have.length(3);
  });

  describe('applies filter', () => {
    it('for empty todo list after filter', () => {
      const todos = [{id: 0, text: 'Learn Redux', completed: false}];
      const component = shallow(<TodoApp todos={[]} visibility="SHOW_COMPLETED" />);
      expect(component.find('TodoList').prop('todos')).to.have.length(0);
    });

    it('for non-empty todo list after filter', () => {
      const todos = [{id: 0, text: 'Learn Redux', completed: false}];
      const component = shallow(<TodoApp todos={todos} visibility="SHOW_ACTIVE" />);
      expect(component.find('TodoList').prop('todos')).to.have.length(1);
    });
  });

  it('configure add todo callback', () => {
    const onAddTodo = () => null;
    const component = shallow(<TodoApp todos={todos} visibility="SHOW_ALL" onAddTodo={onAddTodo} />);
    expect(component.find('AddTodo').prop('onAddTodo')).to.equal(onAddTodo);
  });

  it('configures todo toggle callback', () => {
    const onToggleTodo = () => null;
    const component = shallow(<TodoApp todos={todos} visibility="SHOW_ALL" onToggleTodo={onToggleTodo} />);
    expect(component.find('TodoList').prop('onToggleTodo')).to.equal(onToggleTodo);
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
