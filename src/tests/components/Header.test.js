import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import React from 'react';
import { Header } from '../../components/Header';
import { startLogout } from '../../actions/auth';
import { LoginPage } from '../../components/LoginPage';

// react-test-renderer

test('should render Header correctly',() => {
  const wrapper = shallow(<Header startLogout={() => {}}/>);
  expect(wrapper).toMatchSnapshot();


  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  // console.log(renderer.getRenderOutput());
});

// should call startLogout on button click

test('should call startLogout on button click', () => {
  const onClickSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={onClickSpy}/>);
  wrapper.find('button').simulate('click');
  expect(onClickSpy).toHaveBeenCalled();
});
