import LoginStore from './loginStore';

describe('LoginStore', (): void => {
  it('should render', (): void => {
    const store = new LoginStore();
    expect(store).toBeInstanceOf(LoginStore);
  });
});
