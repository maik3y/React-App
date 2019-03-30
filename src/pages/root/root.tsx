import * as React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
interface P {
  route: RouteConfig;
}
const Root: React.FC<P> = React.memo(({ route }) => (
  <div>
    <h1>Root</h1>
    {renderRoutes(route.routes)}
  </div>
));

export default Root;
