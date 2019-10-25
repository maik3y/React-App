import { NavLink } from 'react-router-dom';
import React from 'react';
import './header.scss';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <nav className="menu">
        <NavLink className="menu__link" exact to={'/home'}>
          Home
        </NavLink>
        <NavLink className="menu__link" exact to={'/about'}>
          About
        </NavLink>
        <NavLink className="menu__link" exact to={'/404notfound'}>
          404 not found
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
