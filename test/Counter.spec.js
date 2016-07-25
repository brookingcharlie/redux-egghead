import {expect} from 'chai';
import sinon from 'sinon';
import React from 'react';
import {shallow} from 'enzyme';
import Counter from '../src/Counter'

describe('Counter', () => {
  it('renders markup', () => {
    const component = shallow(<Counter value={3} />);
    expect(component.find('.value').text()).to.equal('3');
  });

  it('invokes callback when increment button clicked', () => {
    const spy = sinon.spy();
    const component = shallow(<Counter onIncrement={spy} />);
    component.find('.increment').simulate('click');
    expect(spy).to.have.been.called;
  });

  it('invokes callback when decrement button clicked', () => {
    const spy = sinon.spy();
    const component = shallow(<Counter onDecrement={spy} />);
    component.find('.decrement').simulate('click');
    expect(spy).to.have.been.called;
  });
});
