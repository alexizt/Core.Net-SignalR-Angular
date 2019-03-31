import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display AngularSignalRClient', () => {
    page.navigateTo();
    expect(page.getNavBrand()).toEqual('AngularSignalRClient');
  });
});
