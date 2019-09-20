import * as React from 'react';
import RootStore from './rootStore';

const rootStore = new RootStore();
const LoginStoreContext = React.createContext(rootStore.loginStore);

export { LoginStoreContext };
