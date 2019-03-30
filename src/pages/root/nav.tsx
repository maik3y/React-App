import * as React from 'react';
import { RouteConfig } from 'react-router-config';
import { NavLink } from 'react-router-dom';
interface P {
  routes: RouteConfig[];
}
const Nav: React.FC<P> = React.memo(({ routes }) => (
  <ul>
    {routes.map(route => {
      return route.routes.map(subRoute => (
        <li key={subRoute.path}>
          <NavLink to={subRoute.path}>{subRoute.path}</NavLink>
        </li>
      ));
    })}
  </ul>
));

export default Nav;
