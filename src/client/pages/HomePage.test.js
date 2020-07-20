import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe("HomePage", () => {
  it("should render my component", () => {
    const wrapper = shallow(<HomePage />);
    return wrapper;
  });
});