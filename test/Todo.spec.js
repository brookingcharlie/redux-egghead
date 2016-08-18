import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import Todo from '../src/Todo'

describe('Todo', () => {
  const todo = {id: 0, text: 'Learn Redux', completed: false};

  it('renders active todo', () => {
    const component = shallow(<Todo completed={false} text="foo" />);
    expect(component.find('li').text()).to.equal('foo');
    expect(component.find('li').hasClass('completed')).to.equal(false);
  });

  it('renders completed todo', () => {
    const component = shallow(<Todo completed={true} text="foo" />);
    expect(component.find('li').text()).to.equal('foo');
    expect(component.find('li').hasClass('completed')).to.equal(true);
  });

  it('invokes toggle callback on click', () => {
    const onToggle = sinon.spy();
    const component = shallow(<Todo onToggle={onToggle} completed={true} text="foo" />);
    component.find('li').simulate('click');
    expect(onToggle).to.have.been.called;
  });
});
