import * as React from 'react';
import { observer } from 'mobx-react-lite';
import ItemStoreContext from '../../../stores/itemContext';
import ItemRenderer from './ItemRenderer';

interface ItemProps {
  id: number;
}

const Item: React.FC<ItemProps> = ({ id }) => {
  const store = React.useContext(ItemStoreContext);
  const itemObjectContainer = store.getItem(id); // object will be created if it doesn't exist
  return (
    <ItemRenderer
      state={itemObjectContainer.state}
      id={itemObjectContainer.id}
      name={itemObjectContainer.name}
    />
  );
};

export default observer(Item);
