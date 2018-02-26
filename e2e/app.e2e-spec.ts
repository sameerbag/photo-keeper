import { UserAlbumsPage } from './app.po';

describe('user-albums App', () => {
  let page: UserAlbumsPage;

  beforeEach(() => {
    page = new UserAlbumsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
