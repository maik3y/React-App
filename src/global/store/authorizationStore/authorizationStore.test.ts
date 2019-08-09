import AuthorizationStore from './authorizationStore';
import BrowserStore from '../browserStore/browserStore';
import HttpTransport from '../httpTransport/httpTransport';

describe('AuthorizationStore', (): void => {
  it('should render', (): void => {
    const browserStore = new BrowserStore();
    const httpTransport = new HttpTransport();
    const store = new AuthorizationStore(browserStore, httpTransport);
    expect(store).toBeInstanceOf(AuthorizationStore);
  });
});
