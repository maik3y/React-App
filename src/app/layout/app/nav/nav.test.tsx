import * as React from 'react';
import Nav from './nav';
import routes from '../../../../global/routes';
import { shallow } from 'enzyme';

describe('Nav', (): void => {
  it('should render', (): void => {
    const wrapper = shallow(<Nav routes={routes} />);
    expect(wrapper.exists()).toBe(true);
  });
});
