import Auth0Store from './auth0Store';
import LoginStore from './loginStore';
import { configure } from 'mobx';

configure({
  enforceActions: 'always'
});

export default class RootStore {
  private readonly auth0Store: Auth0Store;
  public readonly loginStore: LoginStore;

  public constructor() {
    this.auth0Store = new Auth0Store();
    this.loginStore = new LoginStore(this.auth0Store);
  }
}
