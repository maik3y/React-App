import { computed } from 'mobx';
import { ObjectContainer } from './ObjectContainer';
import { Item, ObjectContainerState } from './types';

export default class ChannelObjectContainer extends ObjectContainer<Item> {
  public constructor(id: number) {
    const fetcher = async (id: number) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return {
        id: id,
        name: `This is item ${id}`
      };
    };
    super(id, fetcher);
  }

  @computed
  public get name(): string {
    switch (this.state) {
      case ObjectContainerState.None:
        return 'None';
      case ObjectContainerState.Loading:
        return 'Loading';
      case ObjectContainerState.Error:
        return 'Error';
      case ObjectContainerState.Done:
        return this.object.name;
      default:
        throw new Error('UNKOWN_STATE');
    }
  }
}
