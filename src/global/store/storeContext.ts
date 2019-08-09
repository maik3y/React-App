import * as React from 'react';
import RootStore from './rootStore/rootStore';

const { loginStore, appStore } = new RootStore();
const LoginStoreContext = React.createContext(loginStore);
const AppStoreContext = React.createContext(appStore);

export { LoginStoreContext, AppStoreContext };
