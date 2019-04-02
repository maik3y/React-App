import * as React from 'react';
import ItemStore from './itemStore';
const itemStore = new ItemStore();
const ItemStoreContext = React.createContext(itemStore);
export default ItemStoreContext;
