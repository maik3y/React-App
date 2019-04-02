import * as React from 'react';
import { ObjectContainerState } from '../../../stores/types';

interface ItemRendererProps {
  state: ObjectContainerState;
  id: number;
  name: string;
}
const ItemRenderer: React.FC<ItemRendererProps> = ({ id, name, state }) => {
  return (
    <div>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>State: {state}</p>
    </div>
  );
};

export default ItemRenderer;
