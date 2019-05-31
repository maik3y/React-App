import * as React from 'react';
import { LoginStoreContext } from '../../../../../global/store/storeContext';
import { observer } from 'mobx-react-lite';
import { RouteProps, Redirect } from 'react-router';

const Login: React.FC<RouteProps> = ({ location }: RouteProps): JSX.Element => {
  const loginStore = React.useContext(LoginStoreContext);
  if (loginStore.isAuthorized) {
    return <Redirect to={location.state.from} />;
  }
  return (
    <div>
      <h2>Login</h2>
      <form
        onSubmit={async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
          event.preventDefault();
          loginStore.login(loginStore.email, loginStore.password, loginStore.rememberMe);
        }}>
        <fieldset>
          <label>
            <span>email</span>
            <input
              type="text"
              name="email"
              autoComplete="email"
              value={loginStore.email}
              disabled={loginStore.isBusy}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                loginStore.setEmail(event.target.value);
              }}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              value={loginStore.password}
              disabled={loginStore.isBusy}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.preventDefault();
                loginStore.setPassword(event.target.value);
              }}
            />
          </label>
        </fieldset>
        <fieldset>
          <button type="submit" disabled={loginStore.isBusy}>
            Login
          </button>
        </fieldset>
        {loginStore.errorMessage.length > 0 ? <fieldset>{loginStore.errorMessage}</fieldset> : null}
      </form>
    </div>
  );
};

export default observer(Login);
