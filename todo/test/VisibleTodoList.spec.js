import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import VisibleTodoList from '../src/VisibleTodoList'

chai.use(sinonChai);

describe('VisibleTodoList', () => {
  const todos = [
    {id: 0, text: 'Learn Redux', completed: false},
    {id: 1, text: 'Learn React', completed: true},
    {id: 2, text: 'Learn Guitar', completed: false}
  ];

  it('renders all', () => {
    const state = {todos: todos, filter: 'SHOW_ALL'};
    const store = {getState: () => state};
    const component = shallow(<VisibleTodoList store={store} />);
    expect(component.find('TodoList').prop('todos')).to.eql(todos);
  });

  it('renders completed', () => {
    const state = {todos: todos, filter: 'SHOW_COMPLETED'};
    const store = {getState: () => state};
    const component = shallow(<VisibleTodoList store={store} />);
    expect(component.find('TodoList').prop('todos')).to.eql([todos[1]]);
  });

  it('renders active', () => {
    const state = {todos: todos, filter: 'SHOW_ACTIVE'};
    const store = {getState: () => state};
    const component = shallow(<VisibleTodoList store={store} />);
    expect(component.find('TodoList').prop('todos')).to.eql([todos[0], todos[2]]);
  });

  it('configures callback', () => {
    const state = {todos: todos, filter: 'SHOW_ALL'};
    const store = {getState: () => state, dispatch: sinon.spy()};
    const component = shallow(<VisibleTodoList store={store} />);
    component.find('TodoList').prop('onToggleTodo')(2);
    console.log('store.dispatch', store.dispatch);
    expect(store.dispatch).to.have.been.calledWith({type: 'TOGGLE_TODO', id: 2});
  });
});
