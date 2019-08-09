import * as React from 'react';
import Nav from './nav';
import { shallow } from 'enzyme';

describe('Nav', (): void => {
  it('should render', (): void => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.exists()).toBe(true);
  });
});
