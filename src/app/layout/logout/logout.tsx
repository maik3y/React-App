import * as React from 'react';
import { LoginStoreContext } from '../../../global/store/storeContext';
import { observer } from 'mobx-react-lite';
import { Redirect } from 'react-router';

const Logout: React.FC = (): JSX.Element => {
  const loginStore = React.useContext(LoginStoreContext);
  React.useEffect(
    (): React.EffectCallback => {
      loginStore.logout();
      return (): void => {};
    }
  );
  if (loginStore.isAuthorized) {
    return null;
  }
  return <Redirect to={'/'} />;
};

export default observer(Logout);
