import * as React from 'react';
import App from './app';
import { shallow } from 'enzyme';

describe('App', (): void => {
  it('should render', (): void => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
