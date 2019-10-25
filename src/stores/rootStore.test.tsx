import RootStore from './rootStore';
import GlobalStore from './globalStore';

describe('rootStore', (): void => {
  it('should exist', (): void => {
    const rootStore = new RootStore();
    expect(rootStore).toBeInstanceOf(RootStore);
    expect(rootStore.globalStore).toBeInstanceOf(GlobalStore);
  });

  it('should have a computed value', (): void => {
    const rootStore = new RootStore();
    expect(rootStore.globalStore.value).toEqual('');
    rootStore.globalStore.setValue('test');
    expect(rootStore.globalStore.value).toEqual('test');
  });
});
