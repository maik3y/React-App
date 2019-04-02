import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './../root/routes';
import { hot } from 'react-hot-loader/root';
import Nav from './../root/nav';
import './app.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Nav routes={routes} />
      {renderRoutes(routes)}
    </BrowserRouter>
  );
};

export default hot(App);