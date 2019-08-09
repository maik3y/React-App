import HttpTransport from './httpTransport';

describe('HttpTransport', (): void => {
  it('should render', (): void => {
    const store = new HttpTransport();
    expect(store).toBeInstanceOf(HttpTransport);
  });
});
