import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import Footer from '../src/Footer'

describe('Footer', () => {
  it('renders markup', () => {
    const component = shallow(<Footer visibility="SHOW_ALL" />);
    expect(component.find('FilterLink')).to.have.length(3);
  });

  it('configures filter links', () => {
    const onSetVisibilityFilter = () => null;
    const component = shallow(
      <Footer visibility="SHOW_ALL" onSetVisibilityFilter={onSetVisibilityFilter} />
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
