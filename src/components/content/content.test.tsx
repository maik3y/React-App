import * as React from 'react';
import { mount } from 'enzyme';
import Footer from './content';

describe('Content', (): void => {
  it('should render', (): void => {
    const wrapper = mount(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });
});
