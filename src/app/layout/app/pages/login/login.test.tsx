import * as React from 'react';
import Login from './login';
import { shallow } from 'enzyme';

describe('Login', (): void => {
  it('should render', (): void => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });
});
