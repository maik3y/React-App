import HttpTransport from '../httpTransport/httpTransport';
import BrowserStore from '../browserStore/browserStore';

export default class AuthorizationStore {
  private readonly browserStore: BrowserStore;
  private readonly httpTransport: HttpTransport;
  public constructor(browserStore: BrowserStore, httpTransport: HttpTransport) {
    this.browserStore = browserStore;
    this.httpTransport = httpTransport;
  }
}
