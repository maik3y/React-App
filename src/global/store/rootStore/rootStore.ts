import BrowserStore from '../browserStore/browserStore';
// Transport Layer
import HttpTransport from '../httpTransport/httpTransport';
// Business Layer
import AuthorizationStore from '../authorizationStore/authorizationStore';
// Application Layer
import AppStore from '../appStore/appStore';
import LoginStore from '../loginStore/loginStore';

export default class RootStore {
  private readonly browserStore: BrowserStore;
  // Transport Layer
  private readonly httpTransport: HttpTransport;
  // Business Layer
  private readonly authorizationStore: AuthorizationStore;
  // Application Layer
  public readonly appStore: AppStore;
  public readonly loginStore: LoginStore;

  public constructor() {
    this.browserStore = new BrowserStore();
    // Transport Layer
    this.httpTransport = new HttpTransport();
    // Business Layer
    this.authorizationStore = new AuthorizationStore(this.browserStore, this.httpTransport);
    // Application Layer
    this.appStore = new AppStore();
    this.loginStore = new LoginStore(this.authorizationStore);
  }
}
