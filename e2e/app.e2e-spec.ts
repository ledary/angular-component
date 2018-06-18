import { Anguarl2InputPage } from './app.po';

describe('anguarl2-input App', () => {
  let page: Anguarl2InputPage;

  beforeEach(() => {
    page = new Anguarl2InputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
