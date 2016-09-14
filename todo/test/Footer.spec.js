import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import Footer from '../src/Footer'
import FilterLink from '../src/FilterLink'

describe('Footer', () => {
  it('renders markup', () => {
    const component = shallow(<Footer />);
    expect(component.find('p')).to.have.length(1);
    expect(component.find('p').find(FilterLink)).to.have.length(3);
  });

  it('configures filter links', () => {
    const component = shallow(<Footer />);
    expect(component.find(FilterLink).at(0).prop('filter')).to.equal('SHOW_ALL');
    expect(component.find(FilterLink).at(1).prop('filter')).to.equal('SHOW_ACTIVE');
    expect(component.find(FilterLink).at(2).prop('filter')).to.equal('SHOW_COMPLETED');
  });
});
