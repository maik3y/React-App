import GlobalStore from './globalStore';
import { configure } from 'mobx';

configure({
  enforceActions: 'always'
});

export default class RootStore {
  private readonly _globalStore = new GlobalStore();
  public get globalStore(): GlobalStore {
    return this._globalStore;
  }
  public constructor() {
    this._globalStore = new GlobalStore();
  }
}
