import * as React from 'react';
import About from './about';
import { shallow } from 'enzyme';

describe('About', (): void => {
  it('should render', (): void => {
    const wrapper = shallow(<About />);
    expect(wrapper.exists()).toBe(true);
  });
});
