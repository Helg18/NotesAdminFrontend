import { NotesAdminFrontPage } from './app.po';

describe('notes-admin-front App', () => {
  let page: NotesAdminFrontPage;

  beforeEach(() => {
    page = new NotesAdminFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
