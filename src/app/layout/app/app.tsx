import * as React from 'react';
import Nav from './nav/nav';
import './app.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import NotFound from './pages/notFound/notFound';
import Login from './pages/login/login';
import PrivateRoute from '../../components/PrivateRoute';
import Logout from './pages/logout/logout';

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <PrivateRoute exact path={'/'} component={Home} />
          <Redirect exact from={'/home'} to={'/'} />
          <PrivateRoute exact path={'/about'} component={About} />
          <Route exact path={'/logout'} component={Logout} />
          <Route exact path={'/login'} component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
