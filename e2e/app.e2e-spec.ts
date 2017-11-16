import { DependencyHellPage } from './app.po';

describe('dependency-hell App', () => {
  let page: DependencyHellPage;

  beforeEach(() => {
    page = new DependencyHellPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
