import * as React from 'react';
import App from './app';
import { mount } from 'enzyme';

describe('App', (): void => {
  it('should render', (): void => {
    const wrapper = mount(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
