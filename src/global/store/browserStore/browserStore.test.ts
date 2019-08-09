import BrowserStore from './browserStore';

describe('BrowserStore', (): void => {
  it('should render', (): void => {
    const store = new BrowserStore();
    expect(store).toBeInstanceOf(BrowserStore);
  });
});
