import * as React from 'react';
import { NavLink } from 'react-router-dom';
import HiddenRoute from '../../../components/HiddenRoute';

const Nav: React.FC = (): JSX.Element => {
  return (
    <ul>
      <li>
        <NavLink exact to={'/'}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to={'/home'}>
          Redirect
        </NavLink>
      </li>
      <li>
        <NavLink exact to={'/about'}>
          About
        </NavLink>
      </li>
      <HiddenRoute
        component={(): JSX.Element => (
          <li>
            <NavLink exact to={'/logout'}>
              Logout
            </NavLink>
          </li>
        )}
      />
    </ul>
  );
};

export default Nav;
