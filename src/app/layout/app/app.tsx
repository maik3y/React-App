import * as React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import Nav from './nav/nav';
import routes from '../../../global/routes';
import './app.scss';
interface P {
  route: RouteConfig;
}
const App: React.FC<P> = ({ route }: P): JSX.Element => (
  <div className="app">
    <Nav routes={routes} />
    <h1>Root</h1>
    {renderRoutes(route.routes)}
  </div>
);

export default App;
