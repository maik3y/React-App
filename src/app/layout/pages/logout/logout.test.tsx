import * as React from 'react';
import Logout from './logout';
import { shallow } from 'enzyme';

describe('Logout', (): void => {
  it('should render', (): void => {
    const wrapper = shallow(<Logout />);
    expect(wrapper.exists()).toBe(true);
  });
});
