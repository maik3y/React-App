import * as React from 'react';
import { RouteConfig } from 'react-router-config';
interface P {
  route: RouteConfig;
}
const Home: React.FC<P> = ({ route }) => (
  <div>
    <h2>Home</h2>
  </div>
);

export default Home;
