import { observable, computed, runInAction, action } from 'mobx';
import AuthorizationStore from '../authorizationStore/authorizationStore';
export default class LoginStore {
  private readonly authorizationStore: AuthorizationStore;

  public constructor(authorizationStore: AuthorizationStore) {
    this.authorizationStore = authorizationStore;

    var test = localStorage.getItem('test');
    if (test) {
      const isAuthorized = JSON.parse(test);
      this.setIsAuthorized(isAuthorized);
    }
    this.setIsBusy(false);
  }
  @observable
  private _isAuthorized: boolean = false;
  @computed
  public get isAuthorized(): boolean {
    return this._isAuthorized;
  }
  @action
  private setIsAuthorized(isAuthorized: boolean): void {
    runInAction((): void => {
      this._isAuthorized = isAuthorized;
    });
  }

  @observable
  private _isBusy: boolean = true;
  @computed
  public get isBusy(): boolean {
    return this._isBusy;
  }
  @action
  private setIsBusy(isBusy: boolean): void {
    runInAction((): void => {
      this._isBusy = isBusy;
    });
  }

  @observable
  private _errorMessage: string = '';
  @computed
  public get errorMessage(): string {
    return this._errorMessage;
  }
  @action
  private setErrorMessage(errorMessage: string | Error): void {
    runInAction((): void => {
      if (errorMessage instanceof Error) {
        this._errorMessage = errorMessage.message;
      } else {
        this._errorMessage = errorMessage;
      }
    });
  }

  @observable
  private _email: string = '';
  @computed
  public get email(): string {
    return this._email;
  }
  @action
  public setEmail(email: string): void {
    runInAction((): void => {
      this._email = email;
    });
  }

  @observable
  private _password: string = '';
  @computed
  public get password(): string {
    return this._password;
  }
  @action
  public setPassword(password: string): void {
    runInAction((): void => {
      this._password = password;
    });
  }

  @observable
  private _rememberMe: boolean = false;
  @computed
  public get rememberMe(): boolean {
    return this._rememberMe;
  }
  @action
  public setRememberMe(rememberMe: boolean): void {
    runInAction((): void => {
      this._rememberMe = rememberMe;
    });
  }

  @action
  public async login(email: string, password: string, rememberMe: boolean): Promise<void> {
    try {
      this.setErrorMessage('');
      this.setIsBusy(true);
      localStorage.setItem('test', JSON.stringify(true));
      this.setIsAuthorized(true);
    } catch (error) {
      this.setErrorMessage(error);
      localStorage.removeItem('test');
    } finally {
      this.setIsBusy(false);
    }
  }

  @action
  public async logout(): Promise<void> {
    try {
      this.setErrorMessage('');
      this.setIsBusy(true);
      localStorage.removeItem('test');
      this.setIsAuthorized(false);
    } catch (error) {
      this.setErrorMessage(error);
      localStorage.removeItem('test');
    } finally {
      this.setIsBusy(false);
    }
  }
}
