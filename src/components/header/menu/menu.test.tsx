import * as React from 'react';
import { mount } from 'enzyme';
import Menu from './menu';

describe('Menu', (): void => {
  it('should render', (): void => {
    const wrapper = mount(<Menu />);
    expect(wrapper.exists()).toBe(true);
  });
});
