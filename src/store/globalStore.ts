import { observable, computed, runInAction, action } from 'mobx';

export default class GlobalStore {
  @observable
  private _value: string;
  @computed
  public get value(): string {
    return this._value;
  }
  @action
  public setValue(value: string): void {
    this._value = value;
  }

  public constructor() {
    runInAction((): void => {
      this._value = '';
    });
  }
}
