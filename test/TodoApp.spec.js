import {expect} from 'chai';
import sinon from 'sinon';
import React from 'react';
import {shallow} from 'enzyme';
import TodoApp from '../src/TodoApp'

describe('TodoApp', () => {
  const todos = [
    {id: 0, text: 'Learn Redux', completed: false},
    {id: 1, text: 'Learn React', completed: true},
    {id: 2, text: 'Learn Guitar', completed: false}
  ];

  describe('renders markup', () => {
    it('for empty todo list', () => {
      const component = shallow(<TodoApp todos={[]} />);
      expect(component.find('input')).to.have.length(1);
      expect(component.find('button')).to.have.length(1);
      expect(component.find('li')).to.have.length(0);
    });

    it('for non-empty todo list', () => {
      const component = shallow(<TodoApp todos={todos} />);
      expect(component.find('input')).to.have.length(1);
      expect(component.find('button')).to.have.length(1);
      expect(component.find('li')).to.have.length(3);
      expect(component.find('li').at(0).hasClass('completed')).to.equal(false);
      expect(component.find('li').at(0).text()).to.equal('Learn Redux');
      expect(component.find('li').at(1).hasClass('completed')).to.equal(true);
      expect(component.find('li').at(1).text()).to.equal('Learn React');
      expect(component.find('li').at(2).hasClass('completed')).to.equal(false);
      expect(component.find('li').at(2).text()).to.equal('Learn Guitar');
    });
  });

  // Disabled: Enzyme shallow rendering does not support refs
  xit('invokes callback when todo added', () => {
    const onAdd = sinon.spy();
    const component = shallow(<TodoApp todos={todos} onAdd={onAdd} />);
    component.find('button').simulate('click');
    expect(onAdd).to.have.been.called;
  });

  it('invokes callback when todo toggled', () => {
    const onToggle = sinon.spy();
    const component = shallow(<TodoApp todos={todos} onToggle={onToggle} />);
    component.find('li').at(1).simulate('click');
    expect(onToggle).to.have.been.called;
  });
});
