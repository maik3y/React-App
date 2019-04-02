'use strict';
import { computed, action, observable, ObservableMap, runInAction } from 'mobx';
import ItemObjectContainer from './ItemObjectContainer';

export default class ItemStore {
  private itemMap: ObservableMap<number, ItemObjectContainer>;
  public constructor() {
    this.itemMap = observable.map<number, ItemObjectContainer>({});
  }

  @computed
  public get items(): ItemObjectContainer[] {
    return Array.from(this.itemMap.values());
  }

  @action
  public getItem(id: number): ItemObjectContainer {
    const application = this.itemMap.get(id);
    if (application) return application;
    const fetchedApplication = new ItemObjectContainer(id);
    runInAction(() => {
      this.itemMap.set(id, fetchedApplication);
    });
    return fetchedApplication;
  }
}
