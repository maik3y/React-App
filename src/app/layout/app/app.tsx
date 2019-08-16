import * as React from 'react';
import './app.scss';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink, Link } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import NotFound from '../notFound/notFound';
import Login from '../login/login';
import Logout from '../logout/logout';
import withPage from '../withPage/withPage';
import HiddenRoute from '../../components/HiddenRoute';
import PrivateRoute from '../../components/PrivateRoute';
import { round } from '../../../global/utils/math';

const home = withPage('Home', Home);
const about = withPage('About', About);
const logout = withPage('Logout', Logout);
const login = withPage('Login', Login);
const notFound = withPage('NotFound', NotFound);

const onRender: React.ProfilerOnRenderCallback = (id, phase, actualDuration): void => {
  console.debug(`${phase}: ${id} (${round(actualDuration, 1)}ms)`);
};

const NavHeader: React.FC = (): JSX.Element => {
  return (
    <React.Profiler id="NavHeader" onRender={onRender}>
      <header className="nav">
        <Link to={'/'}>
          <img src="https://via.placeholder.com/250x100/111/fff.jpg" alt="logo" />
        </Link>
      </header>
    </React.Profiler>
  );
};

const NavNavigation: React.FC = (): JSX.Element => {
  return (
    <React.Profiler id="NavNavigation" onRender={onRender}>
      <nav className="nav">
        <NavLink exact to={'/'}>
          Home
        </NavLink>
        <NavLink exact to={'/home'}>
          Redirect
        </NavLink>
        <NavLink exact to={'/about'}>
          About
        </NavLink>
      </nav>
    </React.Profiler>
  );
};

const NavFooter: React.FC = (): JSX.Element => {
  return (
    <React.Profiler id="NavFooter" onRender={onRender}>
      <footer className="nav">
        <div className="user-image">
          <img src="https://via.placeholder.com/100x100/111/fff.jpg" alt="logo" />
        </div>
        <div className="user-details">
          <div className="user-username">USERNAME</div>
          <NavLink exact to={'/logout'}>
            Logout
          </NavLink>
        </div>
      </footer>
    </React.Profiler>
  );
};

const Nav: React.FC = (): JSX.Element => {
  return (
    <React.Profiler id="NavFooter" onRender={onRender}>
      <section className="nav">
        <NavHeader />
        <HiddenRoute
          component={(): JSX.Element => (
            <>
              <NavNavigation />
              <NavFooter />
            </>
          )}
        />
      </section>
    </React.Profiler>
  );
};

const MainHeader: React.FC = (): JSX.Element => {
  return (
    <React.Profiler id="MainHeader" onRender={onRender}>
      <header className="main"></header>
    </React.Profiler>
  );
};

const MainContent: React.FC = (): JSX.Element => {
  return (
    <React.Profiler id="MainContent" onRender={onRender}>
      <Switch>
        <PrivateRoute exact path={'/'} component={home} />
        <Redirect exact from={'/home'} to={'/'} />
        <PrivateRoute exact path={'/about'} component={about} />
        <Route exact path={'/logout'} component={logout} />
        <Route exact path={'/login'} component={login} />
        <Route component={notFound} />
      </Switch>
    </React.Profiler>
  );
};

const MainFooter: React.FC = (): JSX.Element => {
  return (
    <React.Profiler id="MainFooter" onRender={onRender}>
      <footer className="main"></footer>
    </React.Profiler>
  );
};

const Main: React.FC = (): JSX.Element => {
  return (
    <React.Profiler id="Main" onRender={onRender}>
      <section className="main">
        <MainHeader />
        <MainContent />
        <MainFooter />
      </section>
    </React.Profiler>
  );
};

const App: React.FC = (): JSX.Element => {
  return (
    <React.StrictMode>
      <React.Profiler id="App" onRender={onRender}>
        <Router>
          <>
            <Nav />
            <Main />
          </>
        </Router>
      </React.Profiler>
    </React.StrictMode>
  );
};

export default App;
