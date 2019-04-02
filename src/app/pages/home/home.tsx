import * as React from 'react';
import { RouteConfig } from 'react-router-config';
import Item from '../../components/item/Item';
import ItemStoreContext from '../../../stores/itemContext';

interface P {
  route: RouteConfig;
}
const Home: React.FC<P> = ({ route }) => {
  const store = React.useContext(ItemStoreContext);
  store.getItem(1).fetch();
  store.getItem(2).fetch();
  store.getItem(3).fetch();
  store.getItem(4).fetch();
  store.getItem(5).fetch();
  return (
    <div>
      <h2>Home</h2>
      <hr />
      <h3>Item 1</h3>
      <Item id={1} />
      <hr />
      <h3>Item 2</h3>
      <Item id={2} />
      <hr />
      <h3>Item 3</h3>
      <Item id={3} />
      <hr />
      <h3>Item 4</h3>
      <Item id={4} />
      <hr />
      <h3>Item 5</h3>
      <Item id={5} />
    </div>
  );
};

export default Home;
