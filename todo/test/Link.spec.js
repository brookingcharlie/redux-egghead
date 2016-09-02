import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import Link from '../src/Link'

chai.use(sinonChai);

describe('Link', () => {
  it('renders text for current filter', () => {
    const component = shallow(
      <Link active={true}>
        <span className="child" />
        <span className="child" />
      </Link>
    );
    expect(component.find('span.active')).to.have.length(1);
    expect(component.find('a')).to.have.length(0);
    expect(component.find('span.active .child')).to.have.length(2);
  });

  it('renders link for non-current filter', () => {
    const component = shallow(
      <Link active={false}>
        <span className="child" />
        <span className="child" />
      </Link>
    );
    expect(component.find('span.active')).to.have.length(0);
    expect(component.find('a')).to.have.length(1);
    expect(component.find('a .child')).to.have.length(2);
  });

  it('invokes callback when link clicked', () => {
    const onClick = sinon.spy();
    const component = shallow(
      <Link active={false} onClick={onClick}>foo</Link>
    );
    component.find('a').simulate('click', {preventDefault: () => null});
    expect(onClick).to.have.been.calledWith();
  });
});
