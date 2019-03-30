import * as React from 'react';
import App from './../../src/app/app';
import * as renderer from 'react-test-renderer';

test('should render app', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
