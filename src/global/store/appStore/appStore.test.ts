import AppStore from './appStore';

describe('AppStore', (): void => {
  it('should render', (): void => {
    const store = new AppStore();
    expect(store).toBeInstanceOf(AppStore);
  });
});
