import { observable, computed, runInAction } from 'mobx';

export default class GlobalStore {
  @observable
  private _value: string;
  @computed
  private value(): string {
    return this._value;
  }

  public constructor() {
    runInAction(() => {
      this._value = '';
    });
  }
}
