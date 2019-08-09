import AuthorizationStore from './authorizationStore';

describe('AuthorizationStore', (): void => {
  it('should render', (): void => {
    const store = new AuthorizationStore();
    expect(store).toBeInstanceOf(AuthorizationStore);
  });
});
