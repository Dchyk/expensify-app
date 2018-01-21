import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/Header';

// react-test-renderer

test('should render Header correctly',() => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();


  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  // console.log(renderer.getRenderOutput());
});