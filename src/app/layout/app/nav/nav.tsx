import * as React from 'react';
import { RouteConfig } from 'react-router-config';
import { NavLink } from 'react-router-dom';
interface P {
  routes: RouteConfig[];
}
const Nav: React.FC<P> = ({ routes }: P): JSX.Element => (
  <ul>
    {routes.map(
      (route): JSX.Element[] => {
        return route.routes.map(
          (subRoute): JSX.Element => (
            <li key={subRoute.path}>
              <NavLink to={subRoute.path}>{subRoute.path}</NavLink>
            </li>
          )
        );
      }
    )}
  </ul>
);

export default Nav;
