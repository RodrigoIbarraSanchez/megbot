import { MegbotPage } from './app.po';

describe('megbot App', function() {
  let page: MegbotPage;

  beforeEach(() => {
    page = new MegbotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
