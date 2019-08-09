import * as React from 'react';
import Home from './home';
import { shallow } from 'enzyme';

describe('Home', (): void => {
  it('should render', (): void => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
  });
});
