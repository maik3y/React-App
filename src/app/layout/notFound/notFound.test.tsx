import * as React from 'react';
import NotFound from './notFound';
import { shallow } from 'enzyme';

describe('NotFound', (): void => {
  it('should render', (): void => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.exists()).toBe(true);
  });
});
