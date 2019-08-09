import * as React from 'react';
import { LoginStoreContext } from '../../global/store/storeContext';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
export interface PrivateRouteProps {
  component: React.FC<RouteProps>;
}
const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps): JSX.Element => {
  const loginStore = React.useContext(LoginStoreContext);
  return (
    <Route
      {...rest}
      render={(props): JSX.Element =>
        loginStore.isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default observer(PrivateRoute);
