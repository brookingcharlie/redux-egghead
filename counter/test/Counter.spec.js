import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import Counter from '../src/Counter'

describe('Counter', () => {
  it('renders markup', () => {
    const component = shallow(<Counter value={3} />);
    expect(component.find('.value').text()).to.equal('3');
  });

  it('invokes callback when increment button clicked', () => {
    const onIncrement = sinon.spy();
    const component = shallow(<Counter onIncrement={onIncrement} />);
    component.find('.increment').simulate('click');
    expect(onIncrement).to.have.been.called;
  });

  it('invokes callback when decrement button clicked', () => {
    const onDecrement = sinon.spy();
    const component = shallow(<Counter onDecrement={onDecrement} />);
    component.find('.decrement').simulate('click');
    expect(onDecrement).to.have.been.called;
  });
});
