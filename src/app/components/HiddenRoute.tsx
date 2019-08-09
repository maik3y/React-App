import * as React from 'react';
import { LoginStoreContext } from '../../global/store/storeContext';
import { Route, RouteProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
export interface HiddenRouteProps {
  component: React.FC<RouteProps>;
}
const HiddenRoute = ({ component: Component, ...rest }: HiddenRouteProps): JSX.Element => {
  const loginStore = React.useContext(LoginStoreContext);
  return (
    <Route {...rest} render={(props): JSX.Element => (loginStore.isAuthorized ? <Component {...props} /> : null)} />
  );
};

export default observer(HiddenRoute);
