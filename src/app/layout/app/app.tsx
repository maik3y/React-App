import * as React from 'react';
import './app.scss';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { LoginStoreContext } from '../../../global/store/storeContext';

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
  return Page;
}

const home = withPage('Home', (): React.ReactElement => <></>);
const about = withPage('About', (): React.ReactElement => <></>);
const notFound = withPage('NotFound', (): React.ReactElement => <></>);

const App: React.FC = (): React.ReactElement => {
  const loginStore = React.useContext(LoginStoreContext);

  React.useEffect((): React.EffectCallback => {
    loginStore.init();
    return (): void => {};
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <>
          <section className="nav">
            <header className="nav">
              <Link to={'/'}>
                <img src="https://via.placeholder.com/250x100/111/fff.jpg" alt="logo" />
              </Link>
            </header>
            <nav className="nav">
              <NavLink exact to={'/'}>
                Home
              </NavLink>
              <NavLink exact to={'/about'}>
                About
              </NavLink>
            </nav>
            <footer className="nav">
              {loginStore.isAuthenticated ? (
                <div className="nav-user">
                  <div className="user-image">
                    <img src="https://via.placeholder.com/100x100/111/fff.jpg" alt="logo" />
                  </div>
                  <div className="user-details">
                    <div className="user-username">USERNAME</div>
                    <button
                      type="button"
                      onClick={() => {
                        loginStore.logout();
                      }}>
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="nav-login">
                  <button
                    type="button"
                    onClick={() => {
                      loginStore.login();
                    }}>
                    Login
                  </button>
                </div>
              )}
              <table className="debug-table">
                <thead>
                  <tr>
                    <th>KEY</th>
                    <th>VALUE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>isAuthorized:</td>
                    <td>{loginStore.isAuthenticated.toString()}</td>
                  </tr>
                  <tr>
                    <td>isLoading:</td>
                    <td>{loginStore.isLoading.toString()}</td>
                  </tr>
                  <tr>
                    <td>isPopupOpen:</td>
                    <td>{loginStore.isPopupOpen.toString()}</td>
                  </tr>
                </tbody>
              </table>
            </footer>
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

export default observer(App);
