import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import HomePage from './HomePage';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props={}) => {
  return shallow(<HomePage {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(val);
};


test('render home page', () => {
    const wrapper = setup();
    const homeContainer = findByTestAttr(wrapper, "header.row");
    expect(homeContainer.length).toBe(1);
});