import LoginStore from './loginStore';
import AuthorizationStore from '../authorizationStore/authorizationStore';
import BrowserStore from '../browserStore/browserStore';
import HttpTransport from '../httpTransport/httpTransport';

describe('LoginStore', (): void => {
  it('should render', (): void => {
    const browserStore = new BrowserStore();
    const httpTransport = new HttpTransport();
    const authorizationStore = new AuthorizationStore(browserStore, httpTransport);
    const store = new LoginStore(authorizationStore);
    expect(store).toBeInstanceOf(LoginStore);
  });
});
