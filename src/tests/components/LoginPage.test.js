import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should correctly render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

// Login page test file -> should call startLogin on button click

test('should call startLogin on button click', () => {
  const onClickSpy = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={onClickSpy}/>);
  wrapper.find('button').simulate('click');
  expect(onClickSpy).toHaveBeenCalled();
});
