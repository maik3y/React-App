import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import './app.scss';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

function withPage<P extends object>(title: string, Component: React.ComponentType<P>): React.FC<P> {
  const Page = ({ ...props }: {}): React.ReactElement => (
    <section className="page">
      <header className="page">
        <h2>{title}</h2>
      </header>
      <article className="page">
        <Component {...(props as P)} />
      </article>
    </section>
  );
  return observer(Page);
}

const home = withPage('Home', (): React.ReactElement => <></>);
const about = withPage('About', (): React.ReactElement => <></>);
const notFound = withPage('NotFound', (): React.ReactElement => <></>);

const App: React.FC = (): React.ReactElement => {
  return (
    <React.StrictMode>
      <Router>
        <>
          <section className="header">
            <nav className="header">
              <Link to={'/'}>
                <img src="https://via.placeholder.com/250x100/111/fff.jpg" alt="logo" />
              </Link>
              <NavLink exact to={'/'}>
                Home
              </NavLink>
              <NavLink exact to={'/about'}>
                About
              </NavLink>
            </nav>
          </section>
          <section className="main">
            <header className="main"></header>
            <Switch>
              <Route exact path={'/'} component={home} />
              <Route exact path={'/about'} component={about} />
              <Route component={notFound} />
            </Switch>
            <footer className="main"></footer>
          </section>
        </>
      </Router>
    </React.StrictMode>
  );
};

export default hot(observer(App));
