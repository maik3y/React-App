import * as React from 'react';
import Nav from '../nav/nav';
import './app.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import NotFound from '../notFound/notFound';
import Login from '../login/login';
import PrivateRoute from '../../components/PrivateRoute';
import Logout from '../logout/logout';
import withPage from '../withPage/withPage';

const home = withPage('Home', Home);
const about = withPage('About', About);
const logout = withPage('Logout', Logout);
const login = withPage('Login', Login);
const notFound = withPage('NotFound', NotFound);

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <div className="app">
        <div className="navigation">
          <Nav />
        </div>
        <div className="content">
          <Switch>
            <PrivateRoute exact path={'/'} component={home} />
            <Redirect exact from={'/home'} to={'/'} />
            <PrivateRoute exact path={'/about'} component={about} />
            <Route exact path={'/logout'} component={logout} />
            <Route exact path={'/login'} component={login} />
            <Route component={notFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
