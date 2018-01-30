import React from 'react';
import { shallow } from 'enzyme';
import { login, logout } from '../../actions/auth';

test('should login', () => {
  const action = login(100);
  expect(action).toEqual({
    type: 'LOGIN',
    uid: 100
  });
});

test('should logout', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});