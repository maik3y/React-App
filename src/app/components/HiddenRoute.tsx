import * as React from 'react';
import { LoginStoreContext } from '../../global/store/storeContext';
import { Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const HiddenRoute = ({ component: Component, ...rest }): JSX.Element => {
  const loginStore = React.useContext(LoginStoreContext);
  return <Route {...rest} render={(props) => (loginStore.isAuthorized ? <Component {...props} /> : null)} />;
};

export default observer(HiddenRoute);
