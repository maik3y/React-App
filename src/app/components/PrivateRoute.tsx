import * as React from 'react';
import { LoginStoreContext } from '../../global/store/storeContext';
import { Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const PrivateRoute = ({ component: Component, ...rest }): JSX.Element => {
  const loginStore = React.useContext(LoginStoreContext);
  return (
    <Route
      {...rest}
      render={(props) =>
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
