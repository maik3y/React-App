import * as React from 'react';
import { RouteConfig } from 'react-router-config';
interface P {
  route: RouteConfig;
}
const About: React.FC<P> = React.memo(({ route }) => (
  <div>
    <h2>About</h2>
  </div>
));

export default About;
