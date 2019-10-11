import * as React from 'react';
import { mount } from 'enzyme';
import Header from './header';

describe('Header', (): void => {
  it('should render', (): void => {
    const wrapper = mount(<Header />);
    expect(wrapper.exists()).toBe(true);
  });
});
