import React from 'react';
import './header.scss';
import Menu from './menu/menu';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <Menu />
    </header>
  );
};
export default Header;
