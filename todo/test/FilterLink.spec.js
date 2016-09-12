import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import FilterLink from '../src/FilterLink'

chai.use(sinonChai);

describe('FilterLink', () => {
  it('configures link for current filter', () => {
    const store = {getState: () => ({filter: 'SHOW_ALL'})};
    const component = shallow(
      <FilterLink filter="SHOW_ALL">
        <div className="child" />
        <div className="child" />
      </FilterLink>,
      {context: {store}}
    );
    expect(component.find('Link').prop('active')).to.equal(true);
  });

  it('configures link for non-current filter', () => {
    const store = {getState: () => ({filter: 'SHOW_ACTIVE'})};
    const component = shallow(
      <FilterLink filter="SHOW_ALL">
        <div className="child" />
        <div className="child" />
      </FilterLink>,
      {context: {store}}
    );
    expect(component.find('Link').prop('active')).to.equal(false);
  });

  it('configures link callback', () => {
    const store = {getState: () => ({filter: 'SHOW_ACTIVE'}), dispatch: sinon.spy()};
    const component = shallow(
      <FilterLink filter="SHOW_ALL">foo</FilterLink>,
      {context: {store}}
    );
    component.find('Link').prop('onClick')();
    expect(store.dispatch).to.have.been.calledWith(
      {type: 'SET_FILTER', filter: 'SHOW_ALL'}
    );
  });
});
