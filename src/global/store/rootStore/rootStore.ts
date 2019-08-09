import LoginStore from '../loginStore/loginStore';
import AppStore from '../appStore/appStore';

export default class RootStore {
  public readonly appStore: AppStore = new AppStore();
  public readonly loginStore: LoginStore = new LoginStore();

  public constructor() {
    this.appStore = new AppStore();
    this.loginStore = new LoginStore();
  }
}
