import Auth0Store from './auth0Store';
import { computed } from 'mobx';
export default class LoginStore {
  private readonly _auth0Store: Auth0Store;

  public constructor(auth0Store: Auth0Store) {
    this._auth0Store = auth0Store;
  }

  @computed
  public get isLoading(): boolean {
    return this._auth0Store.isLoading;
  }

  @computed
  public get isPopupOpen(): boolean {
    return this._auth0Store.isPopupOpen;
  }

  @computed
  public get isAuthenticated(): boolean {
    return this._auth0Store.isAuthenticated;
  }

  public init(): void {
    this._auth0Store.init(
      {
        // eslint-disable-next-line @typescript-eslint/camelcase
        client_id: '',
        domain: ''
      },
      (): void => {
        // TOOD: Handle this whe we use it.
      }
    );
  }

  public login(): void {
    this._auth0Store.loginWithPopup();
  }

  public logout(): void {
    this._auth0Store.logout();
  }
}
