import { RouteConfig } from 'react-router-config';
import Root from './root';
import Home from '../../pages/home/home';
import About from '../../pages/about/about';

const routes: RouteConfig[] = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/about',
        exact: true,
        component: About
      }
    ]
  }
];

export default routes;
