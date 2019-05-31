import * as React from 'react';
import AppStore from './appStore/appStore';
const appStore = new AppStore();
const AppStoreContext = React.createContext(appStore);
export default { AppStoreContext };
