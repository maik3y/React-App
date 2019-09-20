import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { observable, action, computed } from 'mobx';

export default class Auth0Store {
  private _auth0Client: Auth0Client = null;
  private get auth0Client(): Auth0Client {
    return this._auth0Client;
  }
  private setAuth0Client(auth0Client: Auth0Client): void {
    this._auth0Client = auth0Client;
  }

  @computed
  public get isAuthenticated(): boolean {
    return this._user !== null && this._user !== undefined;
  }

  @observable
  private _user: unknown = null;
  @computed
  public get user(): unknown {
    return this._user;
  }
  @action
  private setUser(user: unknown): void {
    this._user = user;
  }

  @observable
  private _isLoading = false;
  @computed
  public get isLoading(): boolean {
    return this._isLoading;
  }
  @action
  private setIsLoading(isLoading: boolean): void {
    this._isLoading = isLoading;
  }

  @observable
  private _isPopupOpen = false;
  @computed
  public get isPopupOpen(): boolean {
    return this._isPopupOpen;
  }
  @action
  private setIsPopupOpen(isPopupOpen: boolean): void {
    console.log(`isPopupOpen: ${this._isPopupOpen.toString()} > ${isPopupOpen.toString()}`);
    this._isPopupOpen = isPopupOpen;
  }

  public async init(
    auth0ClientOptions: Auth0ClientOptions,
    onRedirectCallback: (appState: unknown) => void,
    getUserOptions?: GetUserOptions
  ): Promise<void> {
    // Create client
    const auth0Client = await createAuth0Client(auth0ClientOptions);
    this.setAuth0Client(auth0Client);

    // Redirect in some case
    if (window.location.search.includes('code=')) {
      const redirectLoginResult = await this.auth0Client.handleRedirectCallback();
      onRedirectCallback(redirectLoginResult.appState);
    }

    // Set Authenticated
    const isAuthenticated = await this.auth0Client.isAuthenticated();
    if (isAuthenticated) {
      const user = await this.auth0Client.getUser(getUserOptions);
      this.setUser(user);
    }

    this.setIsLoading(false);
  }
  public async loginWithPopup(getUserOptions?: GetUserOptions, popupConfigOptions?: PopupConfigOptions): Promise<void> {
    this.setIsPopupOpen(true);
    try {
      await this.auth0Client.loginWithPopup(popupConfigOptions);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsPopupOpen(false);
    }
    const user = await this.auth0Client.getUser(getUserOptions);
    this.setUser(user);
  }
  public async handleRedirectCallback(getUserOptions?: GetUserOptions): Promise<void> {
    this.setIsLoading(true);
    await this.auth0Client.handleRedirectCallback();
    const user = await this.auth0Client.getUser(getUserOptions);
    this.setIsLoading(false);
    this.setUser(user);
  }
  public getIdTokenClaims(getIdTokenClaimsOptions?: getIdTokenClaimsOptions): void {
    this.auth0Client.getIdTokenClaims(getIdTokenClaimsOptions);
  }
  public loginWithRedirect(redirectLoginOptions?: RedirectLoginOptions): void {
    this.auth0Client.loginWithRedirect(redirectLoginOptions);
  }
  public getTokenSilently(getTokenSilentlyOptions?: GetTokenSilentlyOptions): void {
    this.auth0Client.getTokenSilently(getTokenSilentlyOptions);
  }
  public getTokenWithPopup(popupConfigOptions?: PopupConfigOptions): void {
    this.auth0Client.getTokenWithPopup(popupConfigOptions);
  }
  public logout(logoutOptions?: LogoutOptions): void {
    this.auth0Client.logout(logoutOptions);
  }
}
