import RootStore from './rootStore';

describe('RootStore', (): void => {
  it('should render', (): void => {
    const store = new RootStore();
    expect(store).toBeInstanceOf(RootStore);
  });
});
