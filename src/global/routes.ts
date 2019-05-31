import { RouteConfig } from 'react-router-config';
import App from '../app/layout/app/app';
import Home from '../app/layout/app/pages/home/home';
import About from '../app/layout/app/pages/about/about';

const routes: RouteConfig[] = [
  {
    component: App,
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
