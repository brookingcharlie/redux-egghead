import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import FilterLink from '../src/FilterLink'

describe('FilterLink', () => {
  it('renders text for current filter', () => {
    const component = shallow(
      <FilterLink filter="SHOW_ALL" currentFilter="SHOW_ALL">
        <div className="child" />
        <div className="child" />
      </FilterLink>
    );
    expect(component.find('span')).to.have.length(1);
    expect(component.find('a')).to.have.length(0);
    expect(component.find('span .child')).to.have.length(2);
  });

  it('renders link for non-current filter', () => {
    const component = shallow(
      <FilterLink filter="SHOW_ALL" currentFilter="SHOW_ACTIVE">
        <div className="child" />
        <div className="child" />
      </FilterLink>
    );
    expect(component.find('span')).to.have.length(0);
    expect(component.find('a')).to.have.length(1);
    expect(component.find('a .child')).to.have.length(2);
  });

  it('invokes callback when link clicked', () => {
    const onClick = sinon.spy();
    const component = shallow(
      <FilterLink filter="SHOW_ALL" currentFilter="SHOW_ACTIVE" onClick={onClick}>foo</FilterLink>
    );
    component.find('a').simulate('click', {preventDefault: () => null});
    expect(onClick).to.have.been.called;
  });
});
