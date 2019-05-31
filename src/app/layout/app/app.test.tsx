import * as React from 'react';
import App from './app';
import { shallow } from 'enzyme';
import routes from '../../../global/routes';

describe('App', (): void => {
  it('should render', (): void => {
    const wrapper = shallow(<App route={routes[0]} />);
    expect(wrapper.exists()).toBe(true);
  });
});
