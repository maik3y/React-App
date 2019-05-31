import * as React from 'react';
import AppStore from './appStore/appStore';
import LoginStore from './loginStore/loginStore';

const loginStore = new LoginStore();
const LoginStoreContext = React.createContext(loginStore);

const appStore = new AppStore();
const AppStoreContext = React.createContext(appStore);

export { LoginStoreContext, AppStoreContext };
