import { createContext } from 'react';
import RootStore from './rootStore';

const rootStore = new RootStore();
const GlobalStoreContext = createContext(rootStore.globalStore);

export { GlobalStoreContext };
