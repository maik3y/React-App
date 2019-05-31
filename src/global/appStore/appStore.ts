import { observable, computed } from 'mobx';
export default class AppStore {
  @observable
  private _isInitialized = false;
  @computed
  public get isInitialized(): boolean {
    return this._isInitialized;
  }

  @observable
  private _isAuthorized = false;
  @computed
  public get isAuthorized(): boolean {
    return this._isAuthorized;
  }

  public constructor() {}
}
