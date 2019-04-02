import { runInAction, observable, action, computed } from 'mobx';
import { ObjectContainerState, ObjectContainerFetcher } from './types';

export class ObjectContainer<T> {
  public id: number;
  @observable
  public state: ObjectContainerState;
  @observable
  public object: T | null;
  private fetcher: ObjectContainerFetcher<T> | null;
  public constructor(
    id: number,
    fetcher: ObjectContainerFetcher<T> | null = null
  ) {
    this.id = id;
    this.state = ObjectContainerState.None;
    this.object = null;
    this.fetcher = fetcher;
  }

  @action
  public async fetch(): Promise<T | null> {
    console.debug(`${this.constructor.name}->fetch(${this.id})`);
    try {
      runInAction(() => {
        this.state = ObjectContainerState.Loading;
      });
      let object: T;
      if (this.fetcher) {
        object = await this.fetcher(this.id);
      } else {
        throw new Error(`FETCHER_NOT_IMPLEMENTED->fetch(${this.id})`);
      }
      runInAction(() => {
        this.object = object;
        this.state = ObjectContainerState.Done;
      });
      return object;
    } catch (error) {
      runInAction(() => {
        this.state = ObjectContainerState.Error;
      });
      return null;
    }
  }
}
