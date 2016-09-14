import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import TodoApp from '../src/TodoApp';
import AddTodo from '../src/AddTodo';
import VisibleTodoList from '../src/VisibleTodoList';
import Footer from '../src/Footer';

describe('TodoApp', () => {
  it('renders', () => {
    const component = shallow(<TodoApp />);
    expect(component.find('div')).to.have.length(1);
    expect(component.find('div').find(AddTodo)).to.have.length(1);
    expect(component.find('div').find(VisibleTodoList)).to.have.length(1);
    expect(component.find('div').find(Footer)).to.have.length(1);
  });
});
